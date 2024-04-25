document.getElementById('scoreForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    // Get input values
    const greScore = parseFloat(document.getElementById('greScore').value);
    const gmatScore = parseFloat(document.getElementById('gmatScore').value);
    const ieltsScore = parseFloat(document.getElementById('ieltsScore').value);
  
    // Simulate checking eligibility (replace with actual logic)
    const eligibilityResults = simulateEligibilityCheck(greScore, gmatScore, ieltsScore);
  
    // Display results
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = <h2>Eligibility Results</h2>;
    resultsDiv.style.display = 'block';
    resultsDiv.innerHTML += <p>Colleges:</p>;
    eligibilityResults.forEach(college => {
      resultsDiv.innerHTML += <p>${college}</p>;
    });
  });
  
  // Function to simulate eligibility check (replace with actual logic)
  function simulateEligibilityCheck(greScore, gmatScore, ieltsScore) {
    // Sample logic: If scores are above certain thresholds, consider eligible
    const eligibleColleges = [];
    if (greScore >= 310 && gmatScore >= 600 && ieltsScore >= 6.5) {
      eligibleColleges.push('Harvard University');
      eligibleColleges.push('Stanford University');
      eligibleColleges.push('Yale University');
      eligibleColleges.push('Princeton University');
      eligibleColleges.push('Columbia University');
      eligibleColleges.push('Northwestern University');
      eligibleColleges.push('Brown University');
  
    } else {
      eligibleColleges.push('No colleges found ');
      eligibleColleges.push('We are Sorry to say tht but You are not Eligible for any Top Colleges ');
    }
    return eligibleColleges;
  }