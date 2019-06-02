$(function() {
    // クイズボタンを押したとき
    $(document).on('click', '.js-make-quiz', () => {
        const origin = $('.js-origin').val();
        if (origin.length === 0) {
            return ;
        }
        // 文字列をクイズ化してセット
        const quizText = makeQuiz(origin);
        $('.js-quiz').text(quizText);

        // ツイート時のメッセージを変更
        const shareMessage = "文字あてクイズ作ったから解いてみてね！" + "\n" + quizText + "\n" + "#文字あてったー" + "\n" + location.href;
        const tweetUrl = 'https://twitter.com/intent/tweet?text=';
        $('.share_link').attr('href', tweetUrl + encodeURIComponent(shareMessage));

        // クイズエリアを表示
        $('.js-quiz-area').show();
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
            if (/[0-9]/.test(string)) {
                return '1';
            }

            return string;
        });
    }
});