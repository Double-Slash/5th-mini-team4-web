import React from 'react';
import '../../css/CreateAssessment.css';

function CreateAssessment(){
    return (
                 <div>
                     <div class="header">
                     <h1 class="title">하정인 기획&개발&디자인 능력 설문</h1>

                     <li id="exversions">      이전 버전
                        <ul id="submenu">
                            <li><a href="#" id="index1">2020.10.1</a></li>
                            <li><a href="#" id="index2">2020.10.2</a></li>
                            <li><a href="#" id="index3">2020.10.3</a></li>
                            <li><a href="#" id="index4">2020.10.4</a></li>
                        </ul>
                    </li>
                    <button class="send" onClick={onclick}>보내기</button>
                    </div>
                    <div class="body">내용</div>
                </div>
    )
}

export default CreateAssessment;