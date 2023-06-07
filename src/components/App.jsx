// import Statistics from "./statistics/Statistics";
import FeedbackOptions from './feedbackOptions/FeedbackOptions'

const section = {
  width: '100vw',
  height: '40vh',
  margin: ' 0 auto',
  marginBottom: '100px',
  paddingRight: '100px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
};

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        fontSize: 40,
        color: '#010101',
        marginBottom: '120px',
      }}
    >
      Please leave feedback
      {/* <section style={section}>
      <FeedbackOptions>
      </section> */}
      <section style={section}>
        <FeedbackOptions  />
        </section>
    </div>
    
  );
};
