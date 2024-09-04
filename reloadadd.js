export default function add(){
  console.log(1111)
  let md=window.document.querySelector('.ai-modal-wrap')
  if(md) //md.textContent,css.display: none;
  {md.hidden=true;
	alert("aaa111");
  }
window.document.addEventListener("DOMContentLoaded", (event) => {
  console.log("DOM 完全加载和解析333");
  alert(window.document.title+"-----------")
  let md=window.document.querySelector('.ai-modal-wrap')
  alert(md)
  if(md) //md.textContent,css.display: none;
  {md.hidden=true;
	alert("aaa");
  }
	  else{
		  alert("ccc");
		  let MutationObserver = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;//浏览器兼容
			let config = { attributes: true, childList: true,subtree:true}//配置对象
			let observer = new MutationObserver(function(mutations) {//构造函数回调
          mutations.forEach(function(record) {
              let md=window.document.querySelector('.ai-modal-wrap')
					if(md&&!md.hidden) //md.textContent,css.display: none;
					  {
						  md.hidden=true;
						document.querySelector('button.danger').click()
						
						alert('hidden')
					  }
			  });
		   });
		   observer.observe(window.document.querySelector('body'), config);
	  }
  
});
console.log(2222)
}
