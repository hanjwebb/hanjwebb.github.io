
const phrases = [
    'Mistakes are how I grow',
    'I can do hard things!',
    'I have value and worth.',
    'I am safe, I am calm, I can handle this.',
    'I am capable.',
    'I am enough.',
    'I choose to have a good day today.',
    'Bad things don\'t last forever.',
    'Let go of what you can\'t control',
    'I am willing to view things in a different way.',
    'You will be fine!',
    'Things change, the good and bad.',
    'Today I will accept what happens.',
    'There are lots of things I\'m grateful for',
]

const getPhrase = () => {
    let num = Math.floor(Math.random() * (phrases.length));
    document.getElementById('Daily_Phrase').innerHTML = phrases[num];
}
window.onload = getPhrase;