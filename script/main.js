//maxLengthで指定した桁数まで入力されたらフォーカスを移動
function setNextFocus(obj) {
    if (obj.value.length >= obj.maxLength) {
        let es = document.myForm.elements;
        for (let i = 0; i < es.length; i++) {
            if (es[i] == obj) {
                es[i + 1].focus();
                break;
            }
        }
    }
}


const cellGroup = [
    [0, 1],
    [2, 3],
    [4, 5],
    [6, 7],
];

// 結果を格納する配列
let priceList = [];

// 引数行目の単価を計算する
function CalcRow(x) {

    const calcCell1 = cellGroup[x - 1][0];
    const calcCell2 = cellGroup[x - 1][1];

    const amount = document.forms[0].elements[calcCell1].value;
    const price = document.forms[0].elements[calcCell2].value;
    let unit_price = price / amount;
    // 四捨五入
    unit_price = unit_price * 1000;
    unit_price = Math.round(unit_price);
    unit_price = unit_price / 1000;

    priceList.push(unit_price);

}

// 単価を表示する
async function DisplayPrice() {
    document.getElementById("a_unit_price").innerText = priceList[0];
    document.getElementById("b_unit_price").innerText = priceList[1];

}

// どれが安いか表示する
async function DisplayResult() {
    const result = document.getElementById("result");
    const price1 = priceList[0];
    const price2 = priceList[1];
    if (price1 === price2) {
        result.textContent = "どちらも同じです";
    } else if (price1 > price2) {
        result.textContent = "2の方が安いです";
    } else {
        result.textContent = "1の方が安いです";
    }
}


function main() {
    for (let i = 1; i < table.rows.length; i++) {
        CalcRow(i);
    }

    DisplayPrice();

    DisplayResult();
}
