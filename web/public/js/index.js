$(function() {
    // クイズボタンを押したときに文字列をクイズ化する
    $('.js-make-quiz').on('click', () => {
        const origin = $('.js-origin').val();
        $('.js-quiz').text(makeQuiz(origin))
    });

    // Enter押下時に判定させる
    $('.js-origin').on("keydown", (e) => {
        if ((e.which && e.which === 13) || (e.keyCode && e.keyCode === 13)) {
            $('.js-make-quiz').click();
            return false;
        }
    });

    /**
     * 任意の文字をどの文字か判別してクイズにする
     *
     * @param {string} text original のテキスト
     * @returns {string}    quiz 化したあとのテキスト
     */
    const makeQuiz = (text) => {
        return text.replace(/./g, function (string) {
            if (/[A-Z]/.test(string)) {
                return 'A';
            }
            if (/[a-z]/.test(string)) {
                return 'a';
            }
            if (/[\u3400-\u9FFF]/.test(string)) {
                return '漢';
            }
            if (/[ァィゥェォッャュョヵヶ]/.test(string)) {
                return 'ァ';
            }
            if (/[\u30A1-\u30FA]/.test(string)) {
                return 'ア';
            }
            if (/[ぁぃぅぇぉっゃゅょゎ]/.test(string)) {
                return 'ぁ';
            }
            if (/[\u3041-\u3096]/.test(string)) {
                return 'あ';
            }

            return string;
        });
    }
});