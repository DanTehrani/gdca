import React from 'react';
import ActionBoard from '../ActionBoard';

function Actions1 (props) {
  const title = 'FFF、グリーン連合、e-シフト、CAN-Japan、CYJ、JYPS';
  const toWhom = '小泉環境大臣、環境省';
  const what = 'COP25(国連気候変動枠組条約締約国会議)を迎えるにあたり、 \
  2019年11月27日に環境省が主催した意見交換会に他の環境団体と共に参加 \n \
  FFFの意見：私達はマーチを自分たちの未来のため、「マーチを開催せざるをえない状況にある」という思いから企画。 \
  日本には今変化が必要。科学者や「大人」によって気候変動によるリスクを既に特定し、 \
  被害は想定されていて、後は決断を下すのみであり、早急な決定を求めたい。';
  const achievements = '小泉大臣からコメント：日本のFFFはグレタさんの活動をそのまま日本で行うだけではなく、 \
  日本から世界へと運動を広げられるものを'


  return (
    <ActionBoard
      title={title}
      toWhom={toWhom}
      what={what}
      achievements={achievements}
    />
  )
}

export default Actions1;
