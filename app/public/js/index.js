$(function() {
    /**
     * quizTextを画面にセットする
     *
     * @param quizText {string}
     */
    const setQuizText = (quizText) => {
        $('.js-quiz').text(quizText);

        // ツイート時のメッセージを変更
        const shareMessage = "文字あてクイズ作ったから解いてみてね！" + "\n" + quizText + "\n"
            + "#文字あてったー" + "\n" + document.domain + '?quiz=' + encodeURI(quizText);
        const tweetUrl = 'https://twitter.com/intent/tweet?text=';
        $('.share_link').attr('href', tweetUrl + encodeURIComponent(shareMessage));

        // クイズエリアを表示
        $('.js-quiz-area').show();
    };

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
    };

    /**
     * GETパラメータをオブジェクトに詰める
     *
     * @returns {null}
     */
    const getQueryString = () => {
        // 1文字以下はGETパラメータがない
        if (1 >= document.location.search.length) {
            return null;
        }
        // 最初の1文字 (?記号) を除いた文字列を取得する
        const query = document.location.search.substring(1);

        // クエリの区切り記号 (&) で文字列を配列に分割する
        const parameters = query.split('&');

        let result = {};
        for (let i = 0; i < parameters.length; i++) {
            // パラメータ名とパラメータ値に分割する
            const element = parameters[i].split('=');

            const paramName = decodeURIComponent(element[0]);
            const paramValue = decodeURIComponent(element[1]);

            // パラメータ名をキーとして連想配列に追加する
            result[paramName] = decodeURIComponent(paramValue);
        }

        return result;
    };

    // GETパラメータがあるとき
    const query = getQueryString();
    if (query != null) {
        setQuizText(query.quiz);
    }

    // クイズボタンを押したとき
    $(document).on('click', '.js-make-quiz', () => {
        const origin = $('.js-origin').val();
        if (origin.length === 0) {
            return ;
        }
        // 文字列をクイズ化
        const quizText = makeQuiz(origin);
        // クイズをセット
        setQuizText(quizText);
    });

    // Enter押下時に判定させる
    $('.js-origin').on("keydown", (e) => {
        if ((e.which && e.which === 13) || (e.keyCode && e.keyCode === 13)) {
            $('.js-make-quiz').click();
            return false;
        }
    });
});