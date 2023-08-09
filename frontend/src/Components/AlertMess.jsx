import { Alert } from "react-bootstrap";

const AlertMess = ({ alert }) => {
  const cap = (word) => {
    if(word==="danger"){
      word="error"
    }
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  };

  return (
    <div style={{ height: "50px" }}>
      {alert && (
        <Alert variant={alert.type}>
          <Alert.Heading>
            {cap(alert.type)}:{alert.mesg}
          </Alert.Heading>
        </Alert>
      )}
    </div>
  );
};

export default AlertMess;