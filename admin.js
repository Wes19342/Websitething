// Check if records exist in localStorage; if not, use empty array
let records = JSON.parse(localStorage.getItem('adminRecords')) || [];

// Function to render records in admin panel
function displayRecords() {
  const adminResults = document.getElementById('adminResults');
  adminResults.innerHTML = ''; // Clear previous display

  records.forEach((record, index) => {
    const recordDiv = document.createElement('div');
    recordDiv.className = 'record';
    recordDiv.innerHTML = `
      <p>ID: ${record.id}</p>
      <p>Name: ${record.name}</p>
      <p>Case: ${record.case}</p>
      <button onclick="deleteRecord(${index})">Delete</button>
    `;
    adminResults.appendChild(recordDiv);
  });
}

// Function to add a new record
function addRecord() {
  const id = document.getElementById('idInput').value;
  const name = document.getElementById('nameInput').value;
  const caseName = document.getElementById('caseInput').value;

  if (id && name && caseName) {
    const newRecord = { id, name, case: caseName };
    records.push(newRecord);

    // Save updated records to localStorage
    localStorage.setItem('adminRecords', JSON.stringify(records));

    // Clear input fields and update display
    document.getElementById('idInput').value = '';
    document.getElementById('nameInput').value = '';
    document.getElementById('caseInput').value = '';
    displayRecords();
  } else {
    alert('Please fill out all fields.');
  }
}

// Function to delete a record
function deleteRecord(index) {
  records.splice(index, 1); // Remove record from array
  localStorage.setItem('adminRecords', JSON.stringify(records)); // Update localStorage
  displayRecords(); // Refresh display
}

// Display records on page load
displayRecords();
