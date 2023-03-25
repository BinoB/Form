
      // Add event listener for form submission
      const form = document.querySelector("#myForm");
      form.addEventListener("submit", handleSubmit);
    
      // Handle form submission
      function handleSubmit(event) {
        event.preventDefault();
    
        // Get form values
        const firstName = document.querySelector("#firstName").value;
        const lastName = document.querySelector("#lastName").value;
        const address = document.querySelector("#address").value;
        const pincode = document.querySelector("#pincode").value;
        const gender = document.querySelector("#gender").value;
        const foods = [];
        document.querySelectorAll('input[type="checkbox"]:checked').forEach(function(food) {
          foods.push(food.value);
        });
        const state = document.querySelector("#state").value;
        const country = document.querySelector("#country").value;
    
        // Add new row to table
        const tableBody = document.querySelector("#tableBody");
        const newRow = tableBody.insertRow(-1);
        const firstNameCell = newRow.insertCell(0);
        const lastNameCell = newRow.insertCell(1);
        const addressCell = newRow.insertCell(2);
        const pincodeCell = newRow.insertCell(3);
        const genderCell = newRow.insertCell(4);
        const foodsCell = newRow.insertCell(5);
        const stateCell = newRow.insertCell(6);
        const countryCell = newRow.insertCell(7);
        firstNameCell.innerHTML = firstName;
        lastNameCell.innerHTML = lastName;
        addressCell.innerHTML = address;
        pincodeCell.innerHTML = pincode;
        genderCell.innerHTML = gender;
        foodsCell.innerHTML = foods.join(", ");
        stateCell.innerHTML = state;
        countryCell.innerHTML = country;
    
        // Clear form
        form.reset();
      }