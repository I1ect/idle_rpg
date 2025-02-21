let player_variables = {
    playerMaxHealth: 100,
    playerCurrentHealth: 100,
    playerDamage: 10,
    playerAttackSpeed: 2,
    playerResistance: 0,
    playerGold: 0,
    playerLevel: 1,
    playerCurrentExperience: 0,
    playerRequiredExperience: 50,
    playerCurrentCooldown: 0
}

function playerUpdate() {
    document.getElementById("currentHealth").innerText = player_variables.playerCurrentHealth
    document.getElementById("maxHealth").innerText = player_variables.playerMaxHealth
    document.getElementById("level").innerText = player_variables.playerLevel
    document.getElementById("currentExperience").innerText = player_variables.playerCurrentExperience
    document.getElementById("requiredExperience").innerText = player_variables.playerRequiredExperience
    document.getElementById("damage").innerText = player_variables.playerDamage
    document.getElementById("attackSpeed").innerText = player_variables.playerAttackSpeed
    document.getElementById("resistance").innerText = player_variables.playerResistance
    document.getElementById("gold").innerText = player_variables.playerGold
}

function update() {
    playerUpdate()
}

setInterval(update, 100)