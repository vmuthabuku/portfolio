import React from 'react'
import '../styles/homepage.css'
import { Segment, Icon, Container, List} from 'semantic-ui-react'


const Home = () => (
    <>
    <Container text>
    <div className="profile">
    <div className="card 1">
    <div className="card_image"> <img src={require ('../images/me.jpg')} alt="none"/> </div>
    <div className="card_title title-white">
    </div>
    </div>
    <div className="about">
         <p className="heaad">About Me:</p>
        <p>I am Vincent Muthabuku I make or atleast try to make things in the web</p>
        <p>I love solving both easy and complex problems I am a curious head and an avid learner</p>
        <p>In my free time you will find me in a football field playing football or watching football</p>
    </div>

    <div className="proficiency">
    <p className="heaad">About Me:</p>
    <ul>
        <li><Icon name="pointing right" color="violet"/>:  Html, Css, Responsive design, css frameworks(Material-ui, Sematic-ui, styled components, bootsrap) </li>
        <li><Icon name="pointing right" color="violet"/>:  Reactjs, React-redux, React-Apollo for graphql </li>
        <li><Icon name="pointing right" color="violet"/>:  Python flask</li>
        <li><Icon name="pointing right" color="violet"/>:  node-js</li>
        <li><Icon name="pointing right" color="violet"/>:  Databases----> MongoDb & PostgresDb</li>
        <li><Icon name="pointing right" color="violet"/>:  GraphQl</li>
        <li><Icon name="pointing right" color="violet"/>:  Basic dev-ops operations and basic knowledge of docker and kubernetes</li>
    </ul>

    </div>

   
    </div>
    </Container>
    

     <div className="cards-list">  
  <div className="card 1">
    <div className="card_image"> <img src="https://cdn.pixabay.com/photo/2017/08/26/23/37/business-2684758_960_720.png" alt="none"/> </div>
    <div className="card_title title-white">
      <p><span style={{color:"black"}}>Projects</span></p>
    </div>
  </div>
  
    <div className="card 2">
    <div className="card_image">
      <img src="https://cdn.pixabay.com/photo/2018/05/04/15/37/writing-3374234__340.jpg" alt="none" />
      </div>
    <div class="card_title title-white">
      <p>Blog</p>
    </div>
  </div>  
  </div>
  <Segment vertical>
          <Container textAlign='center'>
         <List style={{color:"grey"}} horizontal link size='huge'>
              <List.Item as='a' href='https://twitter.com/VMuthabuku'>
                <Icon name="twitter" />
              </List.Item>
              <List.Item as='a' href='https://github.com/vmuthabuku'>
              <Icon name="github" />
              </List.Item>
              <List.Item as='a' href='mailto:vmuthabuku@gmail.com'>
              <Icon name="mail" />
              </List.Item>
              <List.Item as='a' href='https://www.linkedin.com/in/vincent-muthabuku-aa574915a/'>
              <Icon name="linkedin" />
              </List.Item>
              <List.Item as='a' href='https://www.facebook.com/profile.php?id=100006375212788'>
              <Icon name="facebook" />
              </List.Item>
            </List>
         </Container>
         </Segment>



    </>
    
)

export default Home