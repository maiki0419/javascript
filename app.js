
let user_hand = prompt('ジャンケンの手をグー、チョキ、パーから選んでください');

while((user_hand != "グー")&&(user_hand != "チョキ")&&(user_hand != "パー")&&(user_hand != null)){
  user_hand = prompt('ジャンケンの手をグー、チョキ、パーから選んでください');
}

let js_hand =getJShand();

let judge = winLose(user_hand,js_hand);

if (user_hand != null){
  alert('あなたの選んだ手は' + user_hand + 'です。\nJavaScriptの選んだ手は' + js_hand + 'です。\n結果は' + judge + 'です。');
} else {
  alert("またチャレンジしてね")
}



function getJShand(){
  let js_hand_num =Math.floor(Math.random()*3);

  let hand_name;

  if(js_hand_num==0){
    hand_name = "グー";
  }else if(js_hand_num==1){
    hand_name = "チョキ";
  }else if(js_hand_num==2){
    hand_name = "パー"
  }

  return hand_name;

}

function winLose(user_hand,js_hand){
  let winLoseStr;

  if(user_hand == "グー"){
    if(js_hand == "グー"){
      winLoseStr = "あいこ"
    }else if(js_hand == "チョキ"){
      winLoseStr = "勝ち"
    }else if(js_hand == "パー"){
      winLoseStr = "負け"
    }
  }else if(user_hand == "チョキ"){
    if(js_hand == "グー"){
      winLoseStr = "負け"
    }else if(js_hand == "チョキ"){
      winLoseStr = "あいこ"
    }else if(js_hand == "パー"){
      winLoseStr = "勝ち"
    }
  }else if(user_hand == "パー"){
    if(js_hand == "グー"){
      winLoseStr = "勝ち"
    }else if(js_hand == "チョキ"){
      winLoseStr = "負け"
    }else if(js_hand == "パー"){
      winLoseStr = "あいこ"
    }
  }

  return winLoseStr;

}