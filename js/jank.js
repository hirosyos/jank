/*************************
 * jank.js
 *************************/




$(function () {

    let jibunnote;

    // ジャンケン定数
    const GU = 0;
    const CHOKI = 1;
    const PAR = 2;

    let syouhai;

    //ジャンケン機能
    $('#gu_btn, #cho_btn, #par_btn').on('click', function () {


        //自分の手を判定し画面に出力


        //クリックされたIDを求める
        const clickID = $(this).attr("id");
        //デバッグ出力
        console.log('id  ' + clickID);

        //自分の出した手の表記を変える
        if (clickID == 'gu_btn') {
            //デバッグ出力
            console.log('自分はグー ' + clickID);
            jibunnote = 'グー'
        }
        else if (clickID == 'cho_btn') {
            //デバッグ出力
            console.log('自分はチョキ' + clickID);
            jibunnote = 'チョキ'
        }
        else if (clickID == 'par_btn') {
            //デバッグ出力
            console.log('パー ' + clickID);
            //$('#echo').text('小吉 ');
            jibunnote = 'パー'
        }
        else {
            console.log('何かおかしいです' + clickID);
            jibunnote = '何かおかしいです '
        }
        $('#jibun').text(jibunnote);

        //alert(jibunnote);

        //相手の手を判定し画面に出力


        //乱数のパラメータ
        const min = 0;
        const max = 2;

        //乱数
        let randomNumber;



        //結果の文字列
        let aitenote;

        //0-2の乱数を求める
        randomNumber = Math.floor(Math.random() * max - min + 1) + min;

        //デバッグ出力
        console.log('0から2のどれか  ' + randomNumber);

        if (randomNumber == GU) {
            //デバッグ出力
            console.log('グー ' + randomNumber);
            //$('#echo').text('大吉 ');
            aitenote = 'グー'
        }
        else if (randomNumber == CHOKI) {
            //デバッグ出力
            console.log('チョキ' + randomNumber);
            //$('#echo').text('中吉 ');
            aitenote = 'チョキ'
        }
        else if (randomNumber == PAR) {
            //デバッグ出力
            console.log('パー ' + randomNumber);
            //$('#echo').text('小吉 ');
            aitenote = 'パー'
        }
        else {
            console.log('何かおかしいです' + randomNumber);
            aitenote = '何かおかしいです aaaa'
        }

        $('#aite').text(aitenote);

        //勝敗判定
        alert(jibunnote);
        if (jibunnote == 'グー') {
            if (aitenote == 'グー') {
                //デバッグ出力
                console.log('あいこ');
                syouhai = 'あいこ';
            } else if (aitenote == 'チョキ') {
                //デバッグ出力
                console.log('かち');
                syouhai = 'かち';
            } else if (aitenote == 'パー') {
                //デバッグ出力
                console.log('まけ');
                syouhai = 'まけ';
            } else {
                alert('何かがおかしいですbbbb');
            }

        } else if (jibunnote == 'チョキ') {
            if (aitenote == 'グー') {

            } else if (aitenote == 'チョキ') {

            } else if (aitenote == 'パー') {

            } else {
                alert('何かがおかしいですaa');
            }

        } else if (jibunnote == 'パー') {
            if (aitenote == 'グー') {

            } else if (aitenote == 'チョキ') {

            } else if (aitenote == 'パー') {

            } else {
                alert('何かがおかしいです');
            }

        } else {
            alert('何かがおかしいですerqew' + jibunnote);
        }
        $('#judgment').text(syouhai);


    })


});
</script >
