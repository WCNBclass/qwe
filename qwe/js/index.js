	//m_right选项卡开始
	window.onload = function(){
		// 获取元素
		var oli = document.getElementById('right_ul').children;
		var odiv = document.getElementById('ul_div').children;
		// 遍历
		for(var i=0;i<oli.length;i++){
			oli[i].index = i;
			oli[i].onclick =function(){
				for(var j=0;j<odiv.length;j++){
					odiv[j].style.display = 'none';
				}
				odiv[this.index].style.display = 'block';
			}
		}
		//显示隐藏right
		var oRight_btn = document.getElementsByClassName('j_middle_btn')[0];
		var oRight_div = document.getElementById('m_right');
		var oRight_div_two = document.getElementById('right_div_cont_two');
		oRight_btn.onclick = function() {
			oRight_div.style.display = 'none';
			oRight_div_two.style.display = 'block';
		}
	}

