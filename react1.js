/** @jsx React.DOM */

var SkillsBox = React.createClass({
  render: function(){
    return(
      <div id="skillsBox" className="container-fluid jumbotron">
      <h3>Skills</h3>
      <SkillSection data={data.content.Skills} />
      </div>
    )
  }
});
var SkillSection = React.createClass({
  render: function(){
    var skillNodes = Object.keys(this.props.data).map(function(skillCategory) {
      var skillItems = data.content.Skills[skillCategory].map(function(skillItem){
        return(
          <li>{skillItem}</li>
        );
      });
      return (
        <div className='col-xs-6'>
          <h4>{skillCategory}</h4>
          <ul>{skillItems}</ul>
        </div>
      ); 
    });
    return(
      <div className='row-fluid'>
        {skillNodes}
        
      </div>
      
    )
  }
});


var EducationBox = React.createClass({
  render: function(){
    var array = data.content['Education'].map(function(item){
       var courseworks= item['coursework'].map(function(coursework){
         return(
           <li>{coursework}</li>
         );
       });
       return(
         <div key={item['institution']+item['graduation date']}>
           <h4>{item['Institution']}. {item['graduation date']}</h4>
           <h4>{item['degree']}</h4>
           <h5>Coursework:</h5>
           <ul className="list-inline">{courseworks}</ul>
         </div>
       )
    });
    return(
      <div id="educationBox" className="jumbotron">
      <h3>Education</h3>
      {array}
      </div>
    );
  }
});

var EmploymentBox = React.createClass({
  render: function(){
    var array = data.content['Employment'].map(function(job, index){
       var list = job.summary.map(function(item){
         return(
           <li key={item}>{item}</li>
         )         
       });
       return(
       <div key={job.company+job.title} className='employment'>
         <div className='row'>
           <div className='col-xs-6'>
             <ul className='list-unstyled'>
             <li><strong>{job.company}</strong></li>
             <li><a href={job.website}>{job.website}</a></li>
             <li>{job.title}</li>
             </ul>
         </div>
           <div className='col-xs-6 text-right'><h5>{job.period}</h5></div>
         </div>
         
         <ul>{list}</ul>
       </div>
       );
    });
    return(
      <div id="employmentBox" className="jumbotron">
      <h3>Employment</h3>
      {array}
      </div>
    );
  }
});
var Content = React.createClass({
  render: function(){
    return(
    <div>
      <a className="anchor" id="skillsAnchor" />
      <SkillsBox data = {data} />
      <a className="anchor" id="educationAnchor" />
      <EducationBox data = {data} />
      <a className="anchor" id="employmentAnchor" />
      <EmploymentBox data = {data} />
    </div>
    )
  }
});
React.renderComponent(
  <Content data={data} />,
  document.getElementById('content')
);
