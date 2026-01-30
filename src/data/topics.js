export const topics = [
    {
        id: 'java-basics-variables',
        title: 'Variables & Data Types',
        category: 'Basics',
        description: 'Variables are containers for storing data values. Java is strongly typed, meaning every variable must be declared with a data type.',
        code: `int myNum = 5;               // Integer (whole number)
float myFloatNum = 5.99f;    // Floating point number
char myLetter = 'D';         // Character
boolean myBool = true;       // Boolean
String myText = "Hello";     // String`
    },
    {
        id: 'java-basics-loops',
        title: 'Loops (For, While)',
        category: 'Basics',
        description: 'Loops are used to execute a block of code repeatedly as long as a specified condition is reached.',
        code: `// For Loop
for (int i = 0; i < 5; i++) {
  System.out.println(i);
}

// Enhanced For Loop (for-each)
String[] cars = {"Volvo", "BMW", "Ford"};
for (String i : cars) {
  System.out.println(i);
}

// While Loop
int i = 0;
while (i < 5) {
  System.out.println(i);
  i++;
}`
    },
    {
        id: 'java-oop-class',
        title: 'Classes & Objects',
        category: 'OOP',
        description: 'A Class is a blueprint for creating objects (a particular data structure). An Object is an instance of a Class.',
        code: `public class Main {
  int x = 5;

  public static void main(String[] args) {
    Main myObj = new Main();
    System.out.println(myObj.x);
  }
}`
    },
    {
        id: 'java-methods',
        title: 'Methods',
        category: 'Basics',
        description: 'A method is a block of code which only runs when it is called. You can pass data, known as parameters, into a method.',
        code: `static void myMethod(String fname) {
  System.out.println(fname + " Refsnes");
}

public static void main(String[] args) {
  myMethod("Liam");
  myMethod("Jenny");
}`
    },
    {
        id: 'java-collections-arraylist',
        title: 'ArrayList',
        category: 'Collections',
        description: 'The ArrayList class is a resizable array, which can be found in the java.util package.',
        code: `import java.util.ArrayList;

ArrayList<String> cars = new ArrayList<String>();
cars.add("Volvo");
cars.add("BMW");
cars.add("Ford");
System.out.println(cars);`
    },
    {
        id: 'java-collections-hashmap',
        title: 'HashMap',
        category: 'Collections',
        description: 'A HashMap store items in "key/value" pairs, and you can access them by an index of another type (e.g. a String).',
        code: `import java.util.HashMap;

HashMap<String, String> capitalCities = new HashMap<String, String>();
capitalCities.put("England", "London");
capitalCities.put("Germany", "Berlin");
System.out.println(capitalCities);`
    },
    {
        id: 'java-streams-filter',
        title: 'Java Streams - Filter',
        category: 'Advanced',
        description: 'The filter() method allows you to filter elements of a stream based on a predicate.',
        code: `import java.util.stream.Stream;

Stream<String> myStream = Stream.of("apple", "banana", "pear", "kiwi");
myStream.filter(s -> s.length() > 4)
        .forEach(System.out::println); 
// Output: apple, banana`
    },
    {
        id: 'java-exceptions',
        title: 'Exception Handling',
        category: 'Advanced',
        description: 'Exception handling dictates how your program responds to errors. The try...catch statement is used to handle exceptions.',
        code: `try {
  int[] myNumbers = {1, 2, 3};
  System.out.println(myNumbers[10]);
} catch (Exception e) {
  System.out.println("Something went wrong.");
} finally {
  System.out.println("The try catch is finished.");
}`
    },
    {
        id: 'java-file-io',
        title: 'File Handling (Write)',
        category: 'Advanced',
        description: 'The FileWriter class is used to write to a file.',
        code: `import java.io.FileWriter;
import java.io.IOException;

try {
  FileWriter myWriter = new FileWriter("filename.txt");
  myWriter.write("Files in Java might be tricky, but it is fun enough!");
  myWriter.close();
  System.out.println("Successfully wrote to the file.");
} catch (IOException e) {
  System.out.println("An error occurred.");
  e.printStackTrace();
}`
    }
];
