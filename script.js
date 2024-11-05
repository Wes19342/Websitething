// Fetch data from the JSON file and store in a variable
let records = [];

fetch('data.json')
  .then(response => response.json())
  .then(data => {
    records = data;
  });

// Function to search through the records and display results
function searchRecords() {
  const input = document.getElementById('searchInput').value.toLowerCase();
  const resultsContainer = document.getElementById('results');
  resultsContainer.innerHTML = ''; // Clear previous results

  const filteredRecords = records.filter(record =>
    record.name.toLowerCase().includes(input) || record.case.toLowerCase().includes(input)
  );

  if (filteredRecords.length === 0) {
    resultsContainer.innerHTML = '<p>No records found.</p>';
  } else {
    filteredRecords.forEach(record => {
      const recordDiv = document.createElement('div');
      recordDiv.className = 'record';
      recordDiv.innerHTML = `<p>ID: ${record.id}</p><p>Name: ${record.name}</p><p>Case: ${record.case}</p>`;
      resultsContainer.appendChild(recordDiv);
    });
  }
}
