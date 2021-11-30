const app = new (function () {
    this.el = document.getElementById("candidates");

    this.arrList = [
        { name: "Swati", email: "test@email.com" },
        { name: "test1", email: "test1@email.com" },
    ];

    this.Count = function (data) {
        let el = document.getElementById("counter");
        let name = "Candidate";

        if (data) {
            if (data > 1) {
                name = "Candidates";
            }
            el.innerHTML = data + " " + name;
        } else {
            el.innerHTML = "No " + name;
        }
    };

    this.FetchAll = function () {
        let data = "";

        if (this.arrList.length > 0) {
            for (i = 0; i < this.arrList.length; i++) {
                const { name, email } = this.arrList[i];
                data += "<tr>";
                data += `<td>${name}</td> <td> ${email}</td>`;
                data +=
                    '<td><button onclick="app.Edit(' + i + ')">Edit</button></td>';
                data +=
                    '<td><button onclick="app.Delete(' +
                    i +
                    ')">Delete</button></td>';
                data += "</tr>";
            }
        }

        this.Count(this.arrList.length);
        return (this.el.innerHTML = data);
    };

    this.Add = function () {
        let name = document.getElementById("add-name");
        let email = document.getElementById("add-email");
        // Get the value
        // const candidate = el.value;
        const candidate = {
            name: name.value,
            email: email.value
        };

        if (candidate) {
            // Add the new value
            this.arrList.push(candidate);
            // Reset input value
            name.value = "";
            email.value = "";

            // Display the new list
            this.FetchAll();
        }
    };

    this.Edit = function (item) {
        let name = document.getElementById("edit-name");
        let email = document.getElementById("edit-email");

        name.value = this.arrList[item].name;
        email.value = this.arrList[item].email;
        // Display fields
        document.getElementById("spoiler").style.display = "block";
        self = this;

        document.getElementById("saveEdit").onsubmit = function () {
            // Get value
            const candidate = {
                name: name.value,
                email: email.value
            };

            if (candidate) {
                // Edit value
                self.arrList.splice(item, 1, candidate);
                // Display the new list
                self.FetchAll();
                // Hide fields
                CloseInput();
            }
        };
    };

    this.Delete = function (item) {
        // Delete the current row
        this.arrList.splice(item, 1);
        // Display the new list
        this.FetchAll();
    };
})();

app.FetchAll();

function CloseInput() {
    document.getElementById("spoiler").style.display = "none";
}