
    document.addEventListener('DOMContentLoaded', function () {
        const searchInput = document.getElementById('search-input');
        const autocompleteList = document.getElementById('autocomplete-list');
  
        const linkDictionary = {
          'Ethical HACKING': '/FINAL/proj/index2.html',
          'Soil Qaulity Analysis Using IoT': '/FINAL/proj/index3.html',
          'Face Reognition Using GAN':  '/FINAL/proj/index4.html',
          'Whatsapp Clone': '/FINAL/proj/index5.html',
          'Multi-Camera and AI Based Facial Attendance System': '/FINAL/proj/index.html'
        };
    
        // Event listener for input changes
        searchInput.addEventListener('input', function () {
          const query = this.value.toLowerCase();
          const filteredSuggestions = Object.keys(linkDictionary)
            .filter(suggestion => suggestion.toLowerCase().includes(query));
          displaySuggestions(filteredSuggestions);
        });
    
        // Display suggestions in the autocomplete list
        function displaySuggestions(suggestions) {
          autocompleteList.innerHTML = '';
          suggestions.forEach(suggestion => {
            const listItem = document.createElement('li');
            listItem.classList.add('autocomplete-item');
            listItem.textContent = suggestion;
            listItem.addEventListener('click', function () {
              redirectToLink(suggestion);
            });
            autocompleteList.appendChild(listItem);
          });
    
          // Show or hide the autocomplete list based on the number of suggestions
          autocompleteList.style.display = suggestions.length ? 'block' : 'none';
        }
    
        // Redirect to the link based on the selected suggestion
        function redirectToLink(selectedSuggestion) {
          const selectedLink = linkDictionary[selectedSuggestion];
          if (selectedLink) {
            window.location.href = selectedLink;
          }
        }
    
        // Hide autocomplete list when clicking outside the search container
        document.addEventListener('click', function (event) {
          if (!event.target.closest('#search-container')) {
            autocompleteList.style.display = 'none';
          }
        });
    });
     