// scripts.js

// Data for lessons (you can replace this with an API call or JSON file)
const lessons = [
    { id: 1, title: "JavaScript: The Basics"},
    { id: 2, title: "Javascript: Arrays, Objects, Loops, and Functions"},
    { id: 3, title: "Javascript: DOM Manipulation, Event Handling, and Form Validation"}
  ];
  
  // Function to dynamically load lessons
  function loadLessons() {
    const lessonList = document.getElementById("lesson-list");
  
    lessons.forEach(lesson => {
      const listItem = document.createElement("li");
      const lessonLink = document.createElement("a");
      lessonLink.href = `lesson${lesson.id}.html`;
      lessonLink.textContent = `Lesson ${lesson.id}: ${lesson.title}`;
      listItem.appendChild(lessonLink);
      lessonList.appendChild(listItem);
    });
  }
  
  // Function to handle file downloads
  function downloadFile(fileName) {
    const filePath = `downloads/${fileName}`;
    const link = document.createElement("a");
    link.href = filePath;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
  
  document.addEventListener("DOMContentLoaded", function () {
    console.log("DOM fully loaded");
    // Call the function to load lessons
    loadLessons();
  });