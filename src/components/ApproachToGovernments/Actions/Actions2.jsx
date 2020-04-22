import React from 'react';
import ActionBoard from '../ActionBoard';

function Actions2 (props) {
  const title = 'FFF東京';
  const toWhom = '東京都';
  const what = '気候非常事態宣言の発表を求めて請願';
  const achievements = '2019年11月29日の環境委員会にて「継続審議」';

  return (
    <ActionBoard
      title={title}
      toWhom={toWhom}
      what={what}
      achievements={achievements}
    />
  )
}

export default Actions2;
