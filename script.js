console.log('Hello World');

const newSectionBtn = document.getElementById("new-section-btn");
const compileResumeBtn = document.getElementById("compile-resume-btn");

const displayArea = document.getElementById("display-area");

newSectionBtn.addEventListener('click', () => {
  console.log("Click!");
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
  newSection.appendChild(newSectionControls);
  displayArea.appendChild(newSection);

});

compileResumeBtn.addEventListener('click', () => {
  console.log("Click?");
})