// Loader Image Section=======================
setTimeout(() => {
    const loader = document.querySelector(".loader");
    const body = document.querySelector("body");  // Correct selector for body element
    if (loader) {
        loader.style.display = "none";  // Hide the loader
        body.style.overflow = "auto";   // Set body overflow to auto
    }
}, 2000);

// Window Unload to Alert Message ----------------------
// window.addEventListener('beforeunload', function (e) {
//     e.preventDefault(); 
//     return 'Are you sure you want to leave?'; 
// });

// Function to show the banner popup after 10 sec
// function showBannerPopup() {
//     document.getElementById('bannerPopup').style.display = 'block';
// }
// window.onload = function() {
//     setTimeout(showBannerPopup, 10000);
// };

// Banner Modal Popup====================
// const popup_hides = document.querySelector(".popup_hides");
// const banner_popup_hide = document.querySelector(".banner_popup");
// popup_hides.addEventListener("click",() => {
//     banner_popup_hide.style.display = 'none';
// });

// Button Click to print Resume=================
function printSectionBtn() {
    window.print();
}

// Setting Icon Show Hide================
// const settings_icon = document.querySelector(".settings_icon");
// const settings = document.querySelector(".settings");
// const settings_hide = document.querySelector(".settings_hide");
// settings_icon.addEventListener("click",() => {
//     settings.classList.add("settings_show");
// });
// settings_hide.addEventListener("click",() => {
//     settings.classList.remove("settings_show");
// });

// Split Screen================
const split_screen = document.querySelector(".split_screen");
split_screen.addEventListener("click",() => {
    document.querySelector(".left_section").classList.toggle("hide_section");
    document.querySelector(".right_section").classList.toggle("hide_section");
});

// Full Screen Mode===================
function toggleFullScreen() {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen().catch(err => {
            console.error(`Error attempting to enable full-screen mode: ${err.message} (${err.name})`);
        });
    } else {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        }
    }
}

// All Heading and All list items Editable
const contenteditableList = document.querySelectorAll('.content_box_section ul li');
const contenteditableHeading = document.querySelectorAll('.edit_heading');
const edit_input_title = document.querySelectorAll('.edit_input_title');
const content_edit1 = document.querySelectorAll('.content_edit1');
const allEditableElements = [...contenteditableList, ...contenteditableHeading, ...edit_input_title, ...content_edit1];
allEditableElements.forEach(element => {
    element.setAttribute('contenteditable', 'true');
});

// Loop through each icon and attach the event listener
const contenteremove = document.querySelectorAll('.content_box_section ul li');
const contentremoveicon = document.querySelectorAll('.content_box_section ul li i');
contentremoveicon.forEach((icon, index) => {
    icon.addEventListener('click', () => {
        // Remove the corresponding list item
        contenteremove[index].remove();  // Removes the list item associated with the clicked icon
    });
});



// Start Image Section=====================
function createImageSection(imageSrc) {
    const imageContainer = document.querySelector("#imageContainer");
    const sectionHTML = `
    <div class="image_section content1 elementRemove2 image_section_main">
        <input type="file" name="image" class="form_input image_inputs" accept=".jpg, .jpeg, .png" id="fileInput2">
        <div class="image_main">
            <div class="image_inner">
                <img src="${imageSrc}" alt="User image" id="imageDisplay1">
            </div>
        </div>
        <h3>
            <div class="edit_btn edit_btn2 editbtn3">
                <p class="edit_div edit_div2">
                    <i class="bi bi-three-dots-vertical dots_icon dots_icon2 fs-14" aria-hidden="true"></i>
                    <div class="edit_popup edit_popup2">
                        <p class="edit_text removeButton2"><i class="bi bi-trash3" aria-hidden="true"></i> Remove</p>
                    </div> 
                </p>
            </div> 
        </h3>
    </div>
    `;
    // Set the inner HTML and create the section
    imageContainer.innerHTML = sectionHTML;

    // Add event listener to the 'dots_icon' to toggle the visibility of 'edit_popup'
    const dotsIcon2 = document.querySelector('.dots_icon');
    const editPopup = document.querySelector('.edit_popup');
    dotsIcon2.addEventListener('click', function (event) {
        event.stopPropagation(); // Prevent click event from bubbling up
        editPopup.style.display = editPopup.style.display === 'none' ? 'block' : 'none'; // Toggle visibility
    });
    // Reattach the event listeners after adding dynamic HTML
    const removeButton2 = document.querySelector(".removeButton2");
    const elementRemove2 = document.querySelector(".elementRemove2");
    
    // Handle section removal
    removeButton2.addEventListener("click", () => {
        const confirmation = confirm("Are you sure you want to remove this section?");
        if (confirmation) {
            elementRemove2.remove();
        }
    });

    // Event listener for dynamically added input field
    const fileInput2 = document.querySelector("#fileInput2");
    fileInput2.addEventListener("change", handleFileChange);
}

// Common function to handle file input change
function handleFileChange() {
    const file = this.files[0];
    if (file) {
        const fileType = file.type;
        if (fileType === "images/jpeg" || fileType === "images/png") {
            const imageSrc = URL.createObjectURL(file);
            createImageSection(imageSrc); // Dynamically create the image section with the uploaded image
        } else {
            alert("Please select a JPG, JPEG, or PNG image.");
        }
    }
}

// Event listener for the original file input
const originalFileInput = document.querySelector("#fileInput1");
originalFileInput.addEventListener("change", handleFileChange);

createImageSection('../images/dummy-image.jpg');

// End Image Section=====================


// Toggle the popup on the dots icon click
const dotsIcons = document.querySelectorAll('.dots_icon');
const editPopups = document.querySelectorAll('.edit_popup');
dotsIcons.forEach((dotsIcon, index) => {
    const editPopup = editPopups[index]; // Get the corresponding popup for the button
    dotsIcon.addEventListener("click", (event) => {
        event.stopPropagation(); // Prevent the click from bubbling to the document
        editPopups.forEach((popup, popupIndex) => {
            if (popupIndex !== index) {
                popup.classList.remove("d-block"); // Hide other popups
            }
        });
        editPopup.classList.toggle("d-block"); // Toggle display class
    });
});
document.addEventListener("click", (event) => {
    editPopups.forEach(editPopup => {
        if (!editPopup.contains(event.target) && !dotsIcons[Array.from(editPopups).indexOf(editPopup)].contains(event.target)) {
            editPopup.classList.remove("d-block"); // Hide the popup
        }
    });
});

// Start Section Name,Work,Email,Mobile,Address================
document.addEventListener("DOMContentLoaded", function() {
    function initInputSection(inputId, displayClass) {
        const inputElement = document.querySelector(`#${inputId}`);
        const displayElement = document.querySelector(`.${displayClass}`);
        inputElement.addEventListener("input", function() {
            const inputValue = this.value;
            displayElement.textContent = inputValue; // Display the current value
        });
    }
    initInputSection("name1", "show_name1");
    initInputSection("work1", "show_work1");
    initInputSection("email1", "show_email1");
    initInputSection("mobile1", "show_mobile1");
    initInputSection("address1", "show_address1");
});
// End Section Name,Work,Email,Mobile,Address===================


// Start Content Box1 Section=====================
document.addEventListener("DOMContentLoaded", function() {
    function initSection(sectionId, inputBoxId, listAppendClass, inputTagsClass, inputSectionID) {
        const focusElement = document.querySelector(`#${sectionId}`);
        const input_section = document.querySelector(`#${inputSectionID}`);
        if (!focusElement) {
            // console.error(`Element with ID ${sectionId} not found.`);
            return;
        }
        const editTitle = focusElement.querySelector(`.edit_title`);
        const inputTitle = input_section.querySelector(`.edit_input_title`);
        editTitle.setAttribute('contenteditable', 'true');
        editTitle.addEventListener("input", () => {
            inputTitle.textContent = editTitle.textContent;
        });
        inputTitle.addEventListener("input", () => {
            editTitle.textContent = inputTitle.textContent;
        });
        const inputBtn = input_section.querySelector(`.input_btn`);
        const inputBox = input_section.querySelector(`#${inputBoxId}`);
        const inputTagBoxSecond = input_section.querySelector(inputTagsClass);
        const listItemAppend = focusElement.querySelector(listAppendClass);
        const list_item_content_show = focusElement.querySelectorAll('.list_item_show');
        if (inputBtn && inputBox) {
            inputBtn.addEventListener("click", () => {
                const inputValue = inputBox.value.trim();
                if (!inputValue) {
                    return alert("Please enter a value before adding!");
                }
                list_item_content_show.forEach((item) => {
                    item.classList.add("list_item_hide");
                });
                const tagBox = document.createElement("div");
                tagBox.classList.add("tag_box");
                tagBox.textContent = inputValue;
                inputTagBoxSecond.appendChild(tagBox);

                const listItem = document.createElement("li");
                listItem.classList.add("list_item_show", "editTextList");
                listItem.setAttribute('contenteditable', 'true');
                listItem.textContent = inputValue;
                const removeIcon = document.createElement("i");
                removeIcon.classList.add("bi", "bi-x", "edit_list_item");
                listItem.appendChild(removeIcon);
                listItemAppend.appendChild(listItem);
                inputBox.value = "";
                tagBox.addEventListener("click", () => removeElements(tagBox, listItem));
                removeIcon.addEventListener("click", () => removeElements(tagBox, listItem));
                listItem.addEventListener('input', () => {
                    tagBox.textContent = listItem.textContent;
                });
            });
        } else {
            console.warn("inputBtn or inputBox is not found in the DOM.");
        }
        const new_list_add = focusElement.querySelector(`.new_list_add`);
        new_list_add.addEventListener("click", () => {
            const newlistItem = document.createElement("li");
            newlistItem.classList.add("list_item_show", "editTextList","lh1", "icon");
            newlistItem.setAttribute("contenteditable", "true");
            newlistItem.textContent = "Add New Text";
            const newRemoveIcon = document.createElement("i");
            newRemoveIcon.classList.add("bi", "bi-x", "edit_list_item");
            newlistItem.appendChild(newRemoveIcon);
            listItemAppend.appendChild(newlistItem);
            const listItemTagBox = document.createElement("div");
            listItemTagBox.classList.add("tag_box");
            listItemTagBox.textContent = newlistItem.textContent;
            inputTagBoxSecond.appendChild(listItemTagBox);
            listItemTagBox.addEventListener("click", () => removeElements(listItemTagBox, newlistItem));
            newRemoveIcon.addEventListener('click', () => removeElements(listItemTagBox, newlistItem));
            newlistItem.addEventListener('input', () => {
                listItemTagBox.textContent = newlistItem.textContent;
            });
        });
        const removeBtn = focusElement.querySelector('.removeButton');
        if (removeBtn) {
            removeBtn.addEventListener("click", () => {
                if (confirm("Are you sure you want to remove this section?")) {
                    focusElement.remove();
                    const inputBoxDisabled = document.getElementById(inputBoxId);
                    if (inputBoxDisabled) {
                        inputBoxDisabled.setAttribute("disabled", "true");
                        inputBtn.setAttribute("disabled", "true");
                        inputTitle.removeAttribute("contenteditable");
                    } else {
                        console.warn(`Input box with ID ${inputBoxId} not found.`);
                    }
                    inputTagBoxSecond.remove();
                }
            });
        } else {
            console.warn(`Remove button not found in section ${sectionId}`);
        }
    }
    initSection("focusElement1", "input_box1", ".input_value_append1", ".input_tags1", "input_section1");
    initSection("focusElement2", "input_box2", ".input_value_append2", ".input_tags2", "input_section2");
    initSection("focusElement3", "input_box3", ".input_value_append3", ".input_tags3", "input_section3");
    initSection("focusElement4", "input_box4", ".input_value_append4", ".input_tags4", "input_section4");
    initSection("focusElement6", "input_box6", ".input_value_append6", ".input_tags6", "input_section6");
    initSection("focusElement8", "input_box8", ".input_value_append8", ".input_tags8", "input_section8");
    initSection("focusElement9", "input_box9", ".input_value_append9", ".input_tags9", "input_section9");
});
function removeElements(tagBox, listItem) {
    tagBox.remove();
    listItem.remove();
}
// End Content Box1 Section=====================


// Start Content Box2 Section=====================
document.addEventListener("DOMContentLoaded", function () {
    function initQualificationSection(sectionId, inputBoxId1, inputBoxId2, inputBoxId3, listAppendClass, inputTagsClass, inputBtnClass, inputSectionID) {
        const focusElement = document.querySelector(`#${sectionId}`);
        const input_section = document.querySelector(`#${inputSectionID}`);
        const inputBox1 = document.querySelector(`#${inputBoxId1}`);
        const inputBox2 = document.querySelector(`#${inputBoxId2}`);
        const inputBox3 = document.querySelector(`#${inputBoxId3}`);
        const listItemAppend = document.querySelector(`.${listAppendClass}`);
        const inputTags = document.querySelector(`.${inputTagsClass}`);
        const inputBtn = document.querySelector(`.${inputBtnClass}`);
        // Error checking for required elements
        if (!focusElement || !inputBox1 || !inputBox2 || !inputBox3 || !listItemAppend || !inputTags || !inputBtn || !input_section) {
            console.error(`One or more elements not found in section ${sectionId}.`);
            return;
        }
        const editTitle = focusElement.querySelector(`.edit_title`);
        const inputTitle = input_section.querySelector(`.edit_input_title`);
        editTitle.setAttribute('contenteditable', 'true');
        editTitle.addEventListener("input", () => {
            inputTitle.textContent = editTitle.textContent;
        });
        inputTitle.addEventListener("input", () => {
            editTitle.textContent = inputTitle.textContent;
        });
        // Add event listener for the add button
        const list_item_content_show = focusElement.querySelectorAll('.list_item_show');
        inputBtn.addEventListener("click", function () {
            // Get values from the input boxes
            const inputValue1 = inputBox1.value.trim(); // Qualification
            const inputValue2 = inputBox2.value.trim(); // Year
            const inputValue3 = inputBox3.value.trim(); // Institution
            if (!inputValue1 && !inputValue2 && !inputValue3) {
                return alert("Please enter a value before adding!");
            }
            list_item_content_show.forEach((item) => {
                item.classList.add("list_item_hide");
            });
            // Check if all fields are filled
            if (inputValue1 !== "" && inputValue2 !== "" && inputValue3 !== "") {
                // Create a new div for the educational entry
                const newEntry = document.createElement("div");
                newEntry.innerHTML = `
                    <div class="mb-10">
                        <p class="education_text edit_text1" contenteditable="true">${inputValue1}</p>
                        <p class="education_text edit_text2" contenteditable="true">${inputValue2}</p>
                        <p class="education_text fw-bold edit_text3" contenteditable="true">${inputValue3}</p>
                    </div>
                `;
                // Append the new entry to the list
                listItemAppend.appendChild(newEntry);
                // Create and append tags for each input value
                const tagBox1 = createTagBox(inputValue1); // Qualification tag
                const tagBox2 = createTagBox(inputValue2); // Year tag
                const tagBox3 = createTagBox(inputValue3); // Institution tag
                // Append tags to the inputTags section
                const list_item_createvalue = document.createElement("div");
                list_item_createvalue.classList.add("tag_box_border");
                list_item_createvalue.append(tagBox1, tagBox2, tagBox3);
                inputTags.appendChild(list_item_createvalue);
                // Clear the input fields after adding
                inputBox1.value = "";
                inputBox2.value = "";
                inputBox3.value = "";
                // Update tagBox1 whenever edit_text1 is modified
                const edit_text1 = newEntry.querySelector(".edit_text1");
                edit_text1.addEventListener('input', () => {
                    tagBox1.textContent = edit_text1.textContent; // Update tag box in real-time
                });
                const edit_text2 = newEntry.querySelector(".edit_text2");
                edit_text2.addEventListener('input', () => {
                    tagBox2.textContent = edit_text2.textContent; // Update tag box in real-time
                });
                const edit_text3 = newEntry.querySelector(".edit_text3");
                edit_text3.addEventListener('input', () => {
                    tagBox3.textContent = edit_text3.textContent; // Update tag box in real-time
                });
                
                list_item_createvalue.addEventListener("click", function() {
                    list_item_createvalue.remove();
                    newEntry.remove();
                    // Remove corresponding tags when the entry is removed
                    tagBox1.remove();
                    tagBox2.remove();
                    tagBox3.remove();
                });
                // Add event listeners to remove tags when clicked
                tagBox1.addEventListener("click", function () {
                    newEntry.remove(); // Remove the corresponding list item
                    tagBox1.remove(); // Remove the tag
                });
                tagBox2.addEventListener("click", function () {
                    newEntry.remove(); // Remove the corresponding list item
                    tagBox2.remove(); // Remove the tag
                });
                tagBox3.addEventListener("click", function () {
                    newEntry.remove(); // Remove the corresponding list item
                    tagBox3.remove(); // Remove the tag
                });
            } else {
                alert("Please fill in all fields.");
            }
        });
        const removeBtn = focusElement.querySelector('.removeButton');
        if (removeBtn) {
            removeBtn.addEventListener("click", () => {
                if (confirm("Are you sure you want to remove this section?")) {
                    focusElement.remove();
                    const inputBoxDisabled1 = document.getElementById(inputBoxId1);
                    const inputBoxDisabled2= document.getElementById(inputBoxId2);
                    const inputBoxDisabled3 = document.getElementById(inputBoxId3);
                    if (inputBoxDisabled1 && inputBoxDisabled2 && inputBoxDisabled3) {
                        inputBoxDisabled1.setAttribute("disabled", "true");
                        inputBoxDisabled2.setAttribute("disabled", "true");
                        inputBoxDisabled3.setAttribute("disabled", "true");
                        inputBtn.setAttribute("disabled", "true");
                        inputTitle.removeAttribute("contenteditable");
                    } else {
                        console.warn(`Input box with ID ${inputBoxId1} ${inputBoxId2} ${inputBoxId3}not found.`);
                    }
                    inputBox1.value = "";
                    inputBox2.value = "";
                    inputBox3.value = "";
                }
            });
        } else {
            console.warn(`Remove button not found in section ${sectionId}`);
        }
    }
    // Utility function to create tag boxes
    function createTagBox(text) {
        const tagBox = document.createElement("span");
        tagBox.classList.add("tag_box_qualification");
        tagBox.textContent = text;
        tagBox.style.cursor = "pointer";
        return tagBox;
    }
    // Initialize the qualification section
    initQualificationSection("focusElement5", "input_box5a", "input_box5b", "input_box5c", "input_value_append5", "input_tags5", "input_btn5", "input_section5");
    initQualificationSection("focusElement7", "input_box7a", "input_box7b", "input_box7c", "input_value_append7", "input_tags7", "input_btn7", "input_section7");
});
// End Content Box2 Section=====================


// Function to create and append the new section
function createSection(containerId) {
    const sectionHTML = `
        <div class="content_box_section">
            <h3>
                <span class="edit_heading edit_title" contenteditable="true">New Section</span>
                <div class="edit_btn">
                    <p class="edit_div">
                        <i class="bi bi-three-dots-vertical dots_icon" aria-hidden="true"></i>
                        <div class="edit_popup" style="display: none;">
                            <p class="edit_text removeButton"><i class="bi bi-trash3" aria-hidden="true"></i> Remove</p>
                        </div>
                    </p>
                </div>
            </h3>
            <ul class="input_value_append">
                <li class="list_item_show editTextList icon" contenteditable="true">HTML <i class="bi bi-x edit_list_item" aria-hidden="true"></i></li>
                <li class="list_item_show editTextList icon" contenteditable="true">CSS <i class="bi bi-x edit_list_item" aria-hidden="true"></i></li>
            </ul>
            <span class="new_list_add"><i class="bi bi-plus-lg" aria-hidden="true"></i></span>
        </div>
    `;
    const clone_append_container = document.getElementById(containerId);
    const newSection = document.createElement('div');
    newSection.innerHTML = sectionHTML;
    clone_append_container.appendChild(newSection);
    const newListAdd = newSection.querySelector('.new_list_add');
    newListAdd.addEventListener('click', function () {
        const ul = newSection.querySelector('.input_value_append');
        const newItem = document.createElement('li');
        newItem.setAttribute('contenteditable', 'true');
        newItem.className = 'list_item_show editTextList icon';
        newItem.innerHTML = `New Item <i class="bi bi-x edit_list_item" aria-hidden="true"></i>`;
        ul.appendChild(newItem);
        // Add event listener to remove the parent <li> when the 'edit_list_item' icon is clicked
        newItem.querySelector('.edit_list_item').addEventListener('click', function () {
            newItem.remove();  // Remove the parent <li> element
        });
    });
    // Add click event listeners to existing list items to remove their parent <li> elements
    const listItems = newSection.querySelectorAll('.edit_list_item');
    listItems.forEach(function (item) {
        item.addEventListener('click', function () {
            item.parentElement.remove();  // Remove the parent <li> element
        });
    });
    // Add event listener to the 'removeButton' to remove the whole '.content_box_section'
    const removeButton = newSection.querySelector('.removeButton');
    removeButton.addEventListener('click', function () {
        const confirmDelete = confirm("Are you sure you want to delete this section?");
        if (confirmDelete) {
            newSection.remove();  // Remove the entire content_box_section if confirmed
        }
    });
    // Add event listener to the 'dots_icon' to toggle the visibility of 'edit_popup'
    const dotsIcon2 = newSection.querySelector('.dots_icon');
    const editPopup = newSection.querySelector('.edit_popup');
    dotsIcon2.addEventListener('click', function (event) {
        event.stopPropagation(); // Prevent click event from bubbling up
        editPopup.style.display = editPopup.style.display === 'none' ? 'block' : 'none'; // Toggle visibility
    });
    // Close the edit popup if clicked outside
    document.addEventListener('click', function () {
        editPopup.style.display = 'none'; // Hide the popup if clicked outside
    });
}
// Attach event listeners to both buttons
document.getElementById('clone_btn1').addEventListener('click', function () {
    createSection('clone_append_container1');  // Append to container 1
});
document.getElementById('clone_btn2').addEventListener('click', function () {
    createSection('clone_append_container2');  // Append to container 2
});



// Education Function to clone and append education details
function cloneEducation(containerId) {
    const educationHTML = `
        <div class="education_clone1">
            <p class="fw-normal education_text list_item_show fs-12 fw-6" contenteditable="true">10th</p>
            <p class="education_text list_item_show experience-time small " contenteditable="true">2014</p>
            <p class="education_text scholhight list_item_show fw-4" contenteditable="true">Vidhya Vihar Convant School, Gwalior</p>
            <i class="bi bi-x remove_education_area" aria-hidden="true"></i>
        </div>
    `;
    const educationContainer = document.getElementById(containerId);
    const newEducation = document.createElement('div');
    newEducation.innerHTML = educationHTML;
    educationContainer.appendChild(newEducation);
    // Add event listener to remove the education entry
    const removeIcon = newEducation.querySelector('.remove_education_area'); // Corrected selector
    removeIcon.addEventListener('click', function () {
        newEducation.remove(); // Remove the education_clone1 div
    });
}
// Attach event listener for the education clone button
document.getElementById('education_clone_btn').addEventListener('click', function () {
    cloneEducation('education_container'); // Append to education container
});


// Experience Function to clone and append education details
function cloneExperience(containerId) {
    const experienceHTML = `
        <div class="experience_clone1">
           
               <p class="education_text list_item_show fw-bold company-name sm-heading" contenteditable="true">Aptara, Noida</p>
            <p class="education_text list_item_show ml-20" contenteditable="true">Web Designer</p>
            <p class="education_text list_item_show mb-20 experience-time ml-20" contenteditable="true">3/01/2022 - PRESENT</p>
            <i class="bi bi-x remove_experience_area" aria-hidden="true"></i>
           
        </div>
    `;
    const experienceContainer = document.getElementById(containerId);
    const newExperience = document.createElement('div');
    newExperience.innerHTML = experienceHTML;
    experienceContainer.appendChild(newExperience);
    // Add event listener to remove the education entry
    const removeIcon2 = newExperience.querySelector('.remove_experience_area'); // Corrected selector
    removeIcon2.addEventListener('click', function () {
        newExperience.remove(); // Remove the education_clone1 div
    });
}
// Attach event listener for the education clone button
document.getElementById('experience_clone_btn').addEventListener('click', function () {
    cloneExperience('experience_container'); // Append to education container
});



