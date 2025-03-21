const  Contacts = ()=> {
  const contacts = [
    /*{
    name: "John Doe",
    email: "",
    phone: "",
  }
    */]
    return<>
    { (contacts.length > 0) ? (
          <div>
            <h1>Contacts</h1>
            <ul>
              {contacts.map((contact) => (
                <li key={contact.email}>
                  <h2>{contact.name}</h2>
                  <p>{contact.email}</p>
                  <p>{contact.phone}</p>
                </li>
              ))}
            </ul>
          </div>
        ) : 
          <div>
            <h1>No contacts</h1>
          </div>
        
      }
   
    </>  
    
  }
  export default Contacts;
  