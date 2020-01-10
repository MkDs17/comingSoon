let app = {
  
    init: function() {
      console.log('init')
      
      app.randomBackground();
    
    },        
  
    randomBackground: function() {
      let base = 'img/';
      $("#bg").backstretch([`${base}bg.jpg`, `${base}bg1.jpg`, `${base}bg2.jpg`],
      {duration: 5000, fade:1500});
    },   
    
  };    
    
$(app.init);
  
  
  
    