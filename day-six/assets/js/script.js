// Function to print the pattern of 'M'
void printM()
{
   let i, j, counter = 0;
   for (i = 0; i < height; i++) {
      cout << "*";
      for (j = 0; j <= height; j++) {
         if (j == height)
            cout << "*";
         else if (j == counter
            || j == height - counter - 1)
            cout << "*";
         else
            cout << " ";
      }
      if (counter == height / 2) {
         counter = -99999;
      }
      else
         counter++;
      cout << "\n";
   }
}