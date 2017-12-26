#Dollarsquares

The DollarSquares app implements:

(1) Mobile App Challenge

Minimum Requirements: 
- Create a grid of squares, 7 columns x 7 rows
- Squares should appear in the following color sequence: black, blue, cyan, green, magenta, red, yellow
- Upon clicking each square, the background color of the clicked square should fade to the next color in the sequence.
- Must use React Native 
- Source code must be hosted somewhere in order to share, like Github

Bonus:
- iOS and Android apps both working
- deployed and build shareable through service like TestFlight or HockeyApp

#Instructions
  Clone the dollarsquares repository from gitub
  ```
  cd dollarsquares
  npm install
  ```
  
  To deploy IOS : 
    install fastlane 
    edit fastfile, Appfile and Matchfile in the fastlane directory.
    supply your app hockeyapp app token 
    run the following instruction on the terminal.
     
      ```
      cd dollarsquares
      fastlane ios beta
      ```
      
  Follow the instruction and the app will be pushed to hockeyapp
  
  To deploy Android : 
    install fastlane 
    edit fastfile, Appfile and Matchfile in the fastlane directory.
    supply your app hockeyapp app token 
    run the following instruction on the terminal.
     
      ```
      cd dollarsquares
      fastlane android beta
      ```
      
  Follow the instruction and the app will be pushed to hockeyapp
    
    
    
