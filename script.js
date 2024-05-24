const condoLinks = [
  'https://www.roblox.com.py/games/14539476290/SUS-GAME-18?privateServerLinkCode=58047016429096949316947466171314',
  'https://roblox.com.py/games/15868650463/?privateServerLinkCode=58047016429096949316947466171314',
  // Add more links as needed
];

function selectRandomLink(elementId) {
  const randomIndex = Math.floor(Math.random() * condoLinks.length);
  const randomLink = condoLinks[randomIndex];
  document.getElementById(elementId).href = randomLink;
}

function getRandomInterval() {
  return Math.floor(Math.random() * (600000 - 300000 + 1)) + 300000;
}

function showPopup(key) {
  const popup = document.getElementById('popup');
  const keyText = document.getElementById('keyText');
  const randomName = generateRandomName();
  keyText.innerHTML = `<h2>${randomName} Condo</h2><p>Key: <strong>${key}</strong></p><span id="closeButton">&times;</span>`; // set random name and condo key
  popup.style.display = 'block';

  const closeButton = document.getElementById('closeButton');
  closeButton.addEventListener('click', function(event) {
    event.preventDefault();
    hidePopupWithAnimation();
  });

  // Add Discord button to the popup
  const discordBtn = document.createElement('a');
  discordBtn.href = 'https://discord.gg/jqs8fhWPKW'; // Replace with the actual Discord invite link
  discordBtn.target = '_blank';
  discordBtn.textContent = 'Join Discord';
  discordBtn.classList.add('button'); // Add class for button styling
  keyText.appendChild(discordBtn);

  const enterSiteBtn = document.getElementById('enterSiteBtn');
  if (!enterSiteBtn) {
    const newEnterSiteBtn = document.createElement('a');
    newEnterSiteBtn.href = condoLinks[0];
    newEnterSiteBtn.target = '_blank';
    newEnterSiteBtn.id = 'enterSiteBtn';
    newEnterSiteBtn.textContent = 'Enter Site';
    newEnterSiteBtn.classList.add('button'); // Add class for button styling
    keyText.appendChild(newEnterSiteBtn);
  } else {
    // Update the existing 'enterSiteBtn' href attribute
    enterSiteBtn.href = condoLinks[0];
  }
}

function hidePopupWithAnimation() {
  const popup = document.getElementById('popup');
  popup.style.animation = 'fade-out 0.3s';
  setTimeout(() => {
    hidePopup();
    popup.style.animation = '';
  }, 300);
}

function generateRandomKey() {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let key = '';
  for (let i = 0; i < 5; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    key += characters.charAt(randomIndex);
  }
  return key;
}

function generateRandomName() {
  const names = ['Luxury', 'Modern', 'Elegant', 'Cozy', 'Vintage', 'Stylish'];
  return names[Math.floor(Math.random() * names.length)];
}

function hidePopup() {
  const popup = document.getElementById('popup');
  popup.style.display = 'none';
}

// Initialization
selectRandomLink('randomLink1');
selectRandomLink('randomLink2');

setInterval(function() {
  selectRandomLink('randomLink1');
}, getRandomInterval());

setInterval(function() {
  selectRandomLink('randomLink2');
}, getRandomInterval());

document.getElementById('randomLink1').addEventListener('click', function(event) {
  event.preventDefault();
  const key = generateRandomKey();
  showPopup(key);
});

document.getElementById('randomLink2').addEventListener('click', function(event) {
  event.preventDefault();
  const key = generateRandomKey();
  showPopup(key);
});