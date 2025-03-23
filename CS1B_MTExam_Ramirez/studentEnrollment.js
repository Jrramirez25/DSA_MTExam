let DSA = [];
let WebDev = [];

function
displayStudentList(subjectArray,subjectName) {
  if (subjectArray.length === 0) {
    return "No Students enrolled.";
  }
  return subjectArray.join(',');
}

function showSubjectMenu() {
  let subjectChoice = prompt("Select a subject:\nA) DSA\nB) WebDev\nC) Exit");

  switch
  (subjectChoice.toUpperCase()) {
    case 'A':
      showOptionsMenu(DSA, "DSA");
      break;
      case 'B':
        showOptionsMenu(WebDev, "WebDev");
        break;
        case 'C':
          showFinalReport();
          break;
          default:
            alert("Invalid choice. Please select A, B, or C.");
            showSubjectMenu();
  }
}

function showOptionsMenu(subjectArray,subjectName) {
  let operationChoice = prompt("Select an operation for ${subjectName}:\nA) Enroll\nB) Unenroll\nC) Back to SubjectMenu\nD) Exit");

  switch
  (operationChoice.toUpperCase()) {
    case 'A':
      enrollStudent(subjectArray,subjectName);
      break;
      case 'B':
        unenrollStudent(subjectArray,subjectName);
        break;
        case 'C':
          showSubjectMenu();
          break;
          case 'D':
            showFinalReport();
            break;
            default:
              alert("Invalid choice. Please select A, B, C, or D.");
              showOptionsMenu(subjectArray,subjectName);
  }
}

function enrollStudent(subjectArray,subjectName) {
  let studentName = prompt("Enter the student's name to enroll:");
  if (studentName.trim() === "") {
    alert("Please enter a valid student name.");
    enrollStudent(subjectArray.subjectName);
    return;
  }


subjectArray.push(studentName);
alert('${studentName} enrolled in &{subjectName}.');
showOptionsMenu(subjectArray,subjectName);
}

function unenrollStudent(subjectArray,subjectName) {
  if (subjectArray.length === 0) {
    alert("No students enrolled in this subject.");
    showOptionsMenu(subjectArray,subjectName);
    return;
  }
}

alert('Currently enrolled students: ${displayStudentList(subjectArray,subjectname)}');
let studentName = prompt("Enter the name of the sudent to unenroll:");
if (studentName.trim() === "") {
  alert("Please enter a valid student name.");
  return;
}
let (index > -1)

function showFinalReport() {
  alert("Final Report:\nDSA: ") + displayStudentList(WebDev, "WebDev");
}

showSubjectMenu();
