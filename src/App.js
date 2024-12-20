import './App.css';
import CourseListCard from './components/step04/CourseListCard';
import PackingList from './components/step05/PackingList';
import TextList from './components/step06/TextList';
import TextList2 from './components/step06/TextList2';
import TextList3 from './components/step06/TextList3';
import Event01 from './components/step07/Event01';
import Event02 from './components/step07/Event02';
import Count from './components/step08/Count';
import CourseListCard08 from './components/step08/CourseListCard08';

function App() {
  const items = [
    {
      title: '입문자를 위한, HTML&CSS 웹 개발 입문',
      description: '웹 개발에 필요한 기본 지식을 배웁니다.',
      image: './img/tree-1.jpg',
      isFavorite : true
    },
    {
      title: '입문자를 위한, ES6+ 최신 자바스크립트 입문',
      description: '쉽고! 알찬! 내용을 준비했습니다.',
      image: './img/tree-2.jpg',
      isFavorite : false
    },
    {
      title: '포트폴리오 사이트 만들고 배포까지!',
      description: '포트폴리오 사이트를 만들고 배포해 보세요.',
      image: './img/tree-3.jpg',
      isFavorite : true
    }
  ]

  // 조건부 렌더링 : if, &&, 삼항연산자(조건식? 참: 거짓)
  const ischk = false;
  return (
    <div className='App'>
      {ischk ? <h2>Hello, react</h2> : <CourseListCard items={items} /> }
      <hr />
      <PackingList />
      <hr />
      <h3>key가 없어 오류 발생</h3>
      <TextList />
      <hr />
      <h3>key가 있어 오류 미발생</h3>
      <TextList2 />
      <hr />
      <h3>'chemist' filter 적용</h3>
      <TextList3 />
      <hr />
      <h3>Event Handler 적용</h3>
      <Event01 />
      <hr />
      <h3>Event Handler 적용(children)</h3>
      <Event02 />
      <hr />
      <h3>Event Handler 적용(children)</h3>
      <CourseListCard08 items={items} />
      <hr />
      <h3>Event Handler 적용(Count)</h3>
      <Count />
    </div>
  );
}

export default App;