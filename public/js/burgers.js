$(() => {
  
    $(".create-form").on("submit", (event) => {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  
      const newBurger = {
        burger_name: $("#ca").val().trim(),
        devoured: $("[name=sleepy]:checked").val().trim(),
      };
  
      // Send the POST request.
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger,
      }).then(() => {
        // Reload the page to get the updated list
        location.reload();
      });
    });
  });
  