console.log('Hello World');

const newSectionBtn = document.getElementById("new-section-btn");
const compileResumeBtn = document.getElementById("compile-resume-btn");

const displayArea = document.getElementById("display-area");

newSectionBtn.addEventListener('click', () => {
  const newSection = document.createElement("DIV");
  newSection.classList.add("display-section");
  const newSectionControls = document.createElement("DIV")
  newSectionControls.classList.add("section-controls");

  const newSectionToggle = document.createElement("BUTTON");
  const newToggleIcon = document.createElement("IMG");
  const newSectionExpand = document.createElement("BUTTON");
  const newExpandIcon = document.createElement("IMG");
  const newSectionEdit = document.createElement("BUTTON");
  const newEditIcon = document.createElement("IMG");
  const newSectionDelete = document.createElement("BUTTON");
  const newDeleteIcon = document.createElement("IMG");

  newToggleIcon.setAttribute("SRC", "./images/include.png");
  newExpandIcon.setAttribute("SRC", "./images/expand.png");
  newEditIcon.setAttribute("SRC", "./images/edit.png");
  newDeleteIcon.setAttribute("SRC", "./images/delete.png");

  newSectionToggle.appendChild(newToggleIcon);
  newSectionExpand.appendChild(newExpandIcon);
  newSectionEdit.appendChild(newEditIcon);
  newSectionDelete.appendChild(newDeleteIcon);

  newSectionControls.appendChild(newSectionToggle);
  newSectionControls.appendChild(newSectionExpand);
  newSectionControls.appendChild(newSectionEdit);
  newSectionControls.appendChild(newSectionDelete);


  const newSectionHeading = document.createElement("DIV");
  newSectionHeading.classList.add("section-heading");
  const newTitle = document.createElement("H1");
  newTitle.innerText = `Title`;
  newSectionHeading.appendChild(newTitle);

  const newSectionContent = document.createElement("DIV");
  newSectionContent.classList.add("section-content");
  newSectionContent.innerHTML = getContent();


  newSection.appendChild(newSectionControls);
  newSection.appendChild(newSectionHeading);
  newSection.appendChild(newSectionContent);
  displayArea.appendChild(newSection);

});

compileResumeBtn.addEventListener('click', () => {
  console.log("Click?");
})

function getContent() {
  return "<p>Hello There!</p>";
}