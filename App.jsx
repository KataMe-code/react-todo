import React, { useEffect, useState } from 'react';
import ColuFulMessage from './components/ColorfulMessage';
/**
 *  コンポーネントの命名規則
 * 先頭文字大文字
 */
const App = () => {
    // 変数、更新値、初期値
    // stateを変更した場合に再レンダリングされる
    // 親のコンポーネントが再レンダリングされたときに子も再レンダリングされる
    // console.log('最初');
    const [num, setNum] = useState(0);
    const [faceSheoFlag, setFaceFlag] = useState(false);

    const onClilckCountUp = () => {
        setNum(num + 1);
    }

    const onClickswitchShowFlag = () => {
        setFaceFlag(!faceSheoFlag);
    }

    // setFaceFlagが変わった段階で最初から再読み込みされるのでループが起こってしまいエラーが起きている
    useEffect(() => {
        if (num > 0) {
            if (num % 3 === 0) {
                faceSheoFlag || setFaceFlag(true);
            } else {
                faceSheoFlag && setFaceFlag(false);
            }
        }
    // 第２引数に渡した値が変わったときのみ処理を行うようになる
    }, [num]);

    // Reactでは{} で囲むとJSとしてみなされる
    // styleやクリックイベント等は下記のように指定する

    // props とはコンポーネントに渡す引数のようなもの
    // State コンポーネントの状態
    return <>

        <h1 style={{ color: 'red' }}>こんにちは</h1>
        <ColuFulMessage color='blue'>お元気ですか</ColuFulMessage>
        <ColuFulMessage color='pink'>はい、私は元気です！</ColuFulMessage>
        <button onClick={onClilckCountUp}>カウントアップ</button>
        <br />
        <button onClick={onClickswitchShowFlag}>on/off</button>
        {faceSheoFlag && <p>(≧▽≦)</p>}
        <p>{num}</p>

    </>
}

// React HOOCKでクラスコンポーネントが不要になった　いまは関数コンポーネントのみの開発が主流

export default App;
