document.getElementById('lossRecordingForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Collect data
    let harvestingLoss = document.getElementById('harvestingLoss').value;
    let storageLoss = document.getElementById('storageLoss').value;
    let handlingLoss = document.getElementById('handlingLoss').value;
    let transportationLoss = document.getElementById('transportationLoss').value;
  
    // Simulate data submission (This would be sent to a backend or saved locally)
    alert(`Data Submitted:
      Harvesting Loss: ${harvestingLoss}
      Storage Loss: ${storageLoss}
      Handling Loss: ${handlingLoss}
      Transportation Loss: ${transportationLoss}`);
    
    // Optionally, refresh or update charts/graphs here
  });
  