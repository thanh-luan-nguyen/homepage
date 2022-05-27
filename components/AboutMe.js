import Title from './_sub_components/Title'

const highlightText = text => {
  return (
    <span className='before:block before:absolute before:-inset-1 before:-skew-y-1 before:rounded before:bg-opacity-80 before:bg-red-400 relative inline-block'>
      <span className='relative text-white'>{text}</span>
    </span>
  )
}

const feScore = shiken => {
  const url = 'images/' + shiken + '.png'
  return (
    <div className='relative w-auto mt-5 shadow-2xl'>
      <img src={url} alt='shiken' className='w-full rounded-xl' />
      <div className='absolute top-16 lg:top-20 left-4 md:left-8 lg:left-16 font-semibold bg-black md:text-lg rounded p-1 text-white border-4 border-red-500'>
        {shiken}
      </div>
    </div>
  )
}

export default function AboutMe() {
  return (
    <div id='about'>
      <Title>私について</Title>
      <div className=''>
        <img
          src='images/自己紹介.png'
          alt='自己紹介'
          className='lg:float-left w-full lg:w-[50vw] rounded-2xl mb-5  lg:mr-8 lg:mb-3'
        />
        <p className='text-gray-50 text-lg lg:text-2xl font-semibold'>
          私は１年間以上にわたって独学でプログラミングと開発を勉強してきました。フロンドエンド系の
          {highlightText('HTML, CSS, Javascript')}
          はもちろん, バックエンド系の{highlightText('Java-servlet , NodeJS')}
          に関しても知見があります。Javascriptライブラリに関しては自分のプロジェクトの開発で
          {highlightText('React, NextJs, jQuery, Redux')}
          等の知見があります。コードバージョン管理に関しては、
          {highlightText('Git, Github')}
          の操作ができます。データーベースに関しては
          {highlightText('MySQLやFirebase')}
          などでデータベースシステムを構築できます。
          <br />
          <br />
          実務での開発の経験がありまして、前職では自社のホームページの保守、編集、追加の作業を担当していました。実績としては、
          {highlightText('WordpressとPHP')}
          で自社の新規ページを作成しました。表計算の実務スキルもありまして、前職ではデータ集計・分析作業を担っていました。様々な関数を使用でき、マクロを利用できるようになりました。
          <br />
          <br />
          私の強みは{highlightText('学習意欲')}
          の高さです。自分のプロジェクトを作るのだけではなく、試験勉強にも励んでいます。例えば、2022年5月に
          {highlightText('基本情報技術者試験')}
          に70点以上取得でき合格しました。そのほかに、Java認定資格シルバー取得を目的に勉強しています。資格の勉強のほかに、自分なりにJavaアプリやWebアプリのプロジェクトを開発しております。
          <br />
          <br />
          今後も状況に応じて必要性の高いプログラミング言語を中心に学んでいきたいと考えています。
          よろしくお願いいたします。
        </p>
        <div>
          <div className='flex flex-col w-[90%] m-auto justify-center lg:space-x-10 md:w-full md:flex-row '>
            {feScore('午前試験')}
            {feScore('午後試験')}
          </div>
          <h3 className='text-gray-600 text-xl lg:text-3xl font-semibold text-center mt-7'>
            基本情報技術者試験の成績
          </h3>
        </div>
      </div>
    </div>
  )
}
