import './App.css';
import Library from './components/step01/Library';

// function Header() {
//   return(
//     <header>
//       <h2>Header</h2>
//     </header>
//   );
// }

// function Footer() {
//   return(
//     <footer>
//       <h2>footer</h2>
//     </footer>
//   );
// }

// function Main() {
//   return(
//     <main>
//       <Counter />
//     </main>
//   );
// }
// // 파스칼 케이스 사용해야 한다
// function Counter() {
//   return (
//     <button>Counter</button>
//   );
// }

// 리액트에서는 class 예약어 사용 불가 => className 을 사용한다
function App() {
  return (
    <div>
    {/* <main> */}
      {/* 
      <Header />
      <Main />
      <Footer />
      */}

      {/* 
      <main>
        1단계. 내용 전체를 다 집어 넣는다
      </main>
        */}

      {/*   
      <div class="card">
        <div class="card__header">강의 목록</div>
        <div class="card__body">
          <div class="courses">

            2단계. 중복되는 부분만 별도로 만들어 넣는다
            <Courseitem />
            <Courseitem />
            <Courseitem />            
          </div>
        </div>
      </div> 
      */}
  
      {/* 
      3단계. 중복되는 부분을 List 형태로 전부 담을 수있게 만들어 넣는다
      <CourseListCard /> 
      */}
    {/* </main> */}

      <Library />
    </div>
  );
}

export default App;
