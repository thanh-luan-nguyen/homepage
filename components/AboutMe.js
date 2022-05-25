import Title from './_sub_components/Title'

const highlightText = text => {
  return (
    <span className='before:block before:absolute before:-inset-1 before:-skew-y-1 before:rounded before:bg-opacity-80 before:bg-red-400 relative inline-block'>
      <span className='relative text-white'>{text}</span>
    </span>
  )
}

export default function AboutMe() {
  return (
    <div id="about">
      <Title>私について</Title>
      <div className='flex flex-col space-y-10 lg:space-y-0 lg:flex-row lg:space-x-[2vw] '>
        <img
          src='/自己紹介.png'
          alt='自己紹介'
          className='w-full lg:w-[40vw] lg:h-[23vw] rounded-2xl'
          styles={
            'box-shadow: rgba(240, 46, 170, 0.4) -5px 5px, rgba(240, 46, 170, 0.3) -10px 10px, rgba(240, 46, 170, 0.2) -15px 15px, rgba(240, 46, 170, 0.1) -20px 20px, rgba(240, 46, 170, 0.05) -25px 25px;'
          }
        />
        <p className='text-gray-50 text-lg lg:text-2xl font-semibold'>
          私は１年間以上にわたって独学でプログラミングと開発を勉強してきました。フロンドエンド系の
          {highlightText('HTML, CSS, Javascript、PHP')}
          はもちろん, バックエンド系の{highlightText('Java, Python, NodeJS')}
          に関しても知見があります。Javascriptライブラリに関しては自分のプロジェクトの開発で
          {highlightText('React, NextJs, jQuery, Redux')}
          等の知見があります。コードバージョン管理に関しては、
          {highlightText('git,github')}
          の操作ができます。データーベースに関しては
          {highlightText('MySQLやFirebase')}
          などでデータベースシステムを構築できます。
          <br />
          <br />
          実務での開発の経験がありまして、前職では自社のホームページの保守、編集、追加の作業を担当していました。実務の必要に応じて、
          {highlightText('Wordpress')}
          を学習しました。表計算の実務スキルもありまして、前職ではデータ集計、入力作業を担っていました。様々な関数を使用でき、マクロの作り方も勉強しました。
          <br />
          <br />
          私の強みは学習意欲の高さです。自分のプロジェクトを作るのだけではなく、試験勉強にも励んでいます。例えば、2022年5月に
          {highlightText('基本情報技術者試験')}
          に70点以上取得でき合格しました。そのほかに、Java認定資格シルバーも勉強しています。資格の勉強のほかに、自分なりにJavaアプリ・Webのプロジェクトを開発しております。
          <br />
          <br />
          今後も状況に応じて必要性の高いプログラミング言語を中心に学んでいきたいと考えています。
        </p>
      </div>
    </div>
  )
}
