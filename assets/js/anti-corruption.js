/**
* @fileOverview JavaScript Anti-Corruption Question Library.
* @author <a href="https://github.com/richardhenyash">Richard Ash</a>
* @version 1.0.0
*/
/*jshint esversion: 6 */

// Array of anti-corruption questions and answers
const antiCorruptionQuestions = [
    // 10 pertanyaan pertama
    ["Apa yang dimaksud dengan korupsi?", "Tindakan menyalahgunakan <br> kekuasaan untuk<br> keuntungan pribadi"],
    ["Apa nama lembaga anti korupsi di Indonesia?", "KPK"],
    ["Apa hukuman maksimal untuk tindak pidana korupsi?", "Hukuman mati"],
    ["Apa yang harus dilakukan jika melihat tindakan korupsi?", "Melapor ke KPK"],
    ["Apa dampak negatif korupsi bagi negara?", "Menghambat<br> pembangunan <br> dan <br> merugikan rakyat"],
    ["Apa yang dimaksud dengan gratifikasi?", "Pemberian hadiah<br> yang dapat<br> mempengaruhi keputusan"],
    ["Apa yang harus dilakukan pejabat negara terkait gratifikasi?", "Melaporkan ke KPK<br> dalam waktu 30 hari"],
    ["Apa yang dimaksud dengan suap?", "Memberikan uang <br>atau hadiah untuk<br> mempengaruhi<br> keputusan"],
    ["Apa yang dimaksud dengan kolusi?", "Kerjasama<br> terselubung untuk<br> keuntungan pribadi"],
    ["Apa yang dimaksud dengan nepotisme?", "Mengutamakan<br> keluarga dalam<br> pengangkatan <br>jabatan"],
    
    // 10 pertanyaan tambahan
    ["Apa yang dimaksud dengan money laundering?", "Pencucian uang<br> hasil korupsi<br> untuk menyembunyikan<br> asal-usulnya"],
    ["Apa peran BPK dalam pencegahan korupsi?", "Melakukan audit<br> keuangan negara<br> untuk mendeteksi<br> penyimpangan"],
    ["Apa yang dimaksud dengan conflict of interest?", "Benturan kepentingan<br> antara tugas publik<br> dan kepentingan pribadi"],
    ["Apa sanksi bagi pejabat yang tidak melaporkan gratifikasi?", "Sanksi pidana<br> dan administratif<br> sesuai UU Tipikor"],
    ["Apa yang dimaksud dengan whistleblower?", "Pelapor tindak<br> pidana korupsi<br> yang dilindungi<br> oleh hukum"],
    ["Apa peran masyarakat dalam pencegahan korupsi?", "Melakukan pengawasan<br> dan pelaporan<br> tindak pidana korupsi"],
    ["Apa yang dimaksud dengan transparansi anggaran?", "Keterbukaan informasi<br> keuangan negara<br> untuk publik"],
    ["Apa dampak korupsi terhadap pertumbuhan ekonomi?", "Menghambat investasi<br> dan pertumbuhan<br> ekonomi nasional"],
    ["Apa yang dimaksud dengan good governance?", "Tata kelola<br> pemerintahan yang<br> baik, bersih, dan<br> transparan"],
    ["Apa peran media dalam pencegahan korupsi?", "Melakukan investigasi<br> dan pengawasan<br> terhadap penyelenggaraan<br> negara"]
];

/**
* [Function to return random question and answer array]
* @param  {[number]}    qno             [Number of questions]
* @return {[array]}                     [Question and answer array]
*/
function returnQuestionArray(qno) {
    let questionArray = [];
    let usedIndices = [];
    
    // Jika jumlah pertanyaan yang diminta lebih besar dari yang tersedia
    if (qno > antiCorruptionQuestions.length) {
        qno = antiCorruptionQuestions.length;
    }
    
    for (let i = 0; i < qno; i++) {
        let randomIndex;
        do {
            randomIndex = Math.floor(Math.random() * antiCorruptionQuestions.length);
        } while (usedIndices.includes(randomIndex));
        
        usedIndices.push(randomIndex);
        questionArray.push(antiCorruptionQuestions[randomIndex]);
    }
    
    return shuffleArray(questionArray);
}

/**
* [Function to generate wrong answers for a given question]
* @param  {[array]}    qCurrent         [Current question array]
* @return {[array]}                     [Array of wrong answers]
*/
function wrongAnswers(qCurrent) {
    let wrongAnswerArray = [];
    let usedAnswers = [qCurrent[1]]; // Include correct answer to avoid duplicates
    
    while (wrongAnswerArray.length < 5) {
        let randomIndex = Math.floor(Math.random() * antiCorruptionQuestions.length);
        let potentialAnswer = antiCorruptionQuestions[randomIndex][1];
        
        if (!usedAnswers.includes(potentialAnswer)) {
            wrongAnswerArray.push(potentialAnswer);
            usedAnswers.push(potentialAnswer);
        }
    }
    
    return wrongAnswerArray;
}

/**
* [Function to check if a question is already in the array]
* @param  {[array]}    nq               [New question]
* @param  {[array]}    qArray           [Question array]
* @return {[boolean]}                   [True if question exists]
*/
function checkQuestionArray(nq, qArray) {
    for (let i = 0; i < qArray.length; i++) {
        if (nq[0] === qArray[i][0]) {
            return true;
        }
    }
    return false;
}

/**
* [Function to return answer array for a question]
* @param  {[array]}    qCurrent         [Current question]
* @return {[array]}                     [Answer array]
*/
function answerArray(qCurrent) {
    let answerArray = [];
    let wrongAnswerArray = wrongAnswers(qCurrent);
    
    // Add correct answer
    answerArray.push(qCurrent[1]);
    
    // Add wrong answers
    answerArray = answerArray.concat(wrongAnswerArray);
    
    // Shuffle answers
    return shuffleArray(answerArray);
}

/**
* [Function to shuffle an array]
* @param  {[array]}    arrayToShuffle   [Array to shuffle]
* @return {[array]}                     [Shuffled array]
*/
function shuffleArray(arrayToShuffle) {
    let currentIndex = arrayToShuffle.length;
    let temporaryValue;
    let randomIndex;
    
    while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        
        temporaryValue = arrayToShuffle[currentIndex];
        arrayToShuffle[currentIndex] = arrayToShuffle[randomIndex];
        arrayToShuffle[randomIndex] = temporaryValue;
    }
    
    return arrayToShuffle;
}