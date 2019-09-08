
module.exports = function (app) {
    app.post('/api-init-selection', async function (req, res) {
        selection = req.body.selection
        if (selection == 1) {
            return res.json({
                "data": {
                    "metadata": {
                        "app_name": "Contest",
                        "app_id": 123456,
                        "title": "Tạo Contest",
                        "submit_button": {
                            "label": "Save",
                            "background_color": "#6666ff",
                            "cta": "request",
                            "url": "http:/bitone.herokuapp.com/api-saveContest"
                        },
                        "reset_button": {
                            "label": "Reset",
                            "background_color": "#6666ff",
                            "cta": "request",
                            "url": ""
                        },
                        "elements": [
                            {                            
                                "type": "input",
                                "name": "contestName",
                                "input_type": "text",
                                "label": "Tên Contest",
                                "required": true,
                                "placeholder": "..."
                            },
                            {
                                "type": "input",
                                "input_type": "textarea",
                                "name": "contestDes",
                                "label": "Mô tả Contest",
                                "required": false,
                                "placeholder": "..."
                            },
                            {
                                "type": "input",
                                "input_type": "textarea",
                                "name": "Question",
                                "label": "Các câu hỏi",
                                "required": true,
                                "placeholder": "VD: 1;2;3;..."
                            },
                            {
                                "type": "input",
                                "input_type": "textarea",
                                "name": "Score",
                                "label": "Điểm số cho các câu hỏi",
                                "required": true,
                                "placeholder": "VD: 10;15;20;..."
                            },
                            // {
                            //     "type": "input",
                            //     "input_type": "text",
                            //     "name": "TimeStart",
                            //     "label": "Time Start",
                            //     "required": true,
                            //     "placeholder": "hh:mm dd:mm:yy"
                            // }, 
                            // {
                            //     "type": "input",
                            //     "input_type": "text",
                            //     "name": "TimeOut",
                            //     "label": "Duration",
                            //     "required": true,
                            //     "placeholder": "xx (s)"
                            // }
                        ]
                    }
                }
            });
        }
<<<<<<< HEAD
        else if ( selection.value == 2){
                return res.json({
                    "data": {
                     "metadata": {
=======
        else if (selection == 2) {
            return res.json({
                "data": {
                    "metadata": {
>>>>>>> 6990bdd34f144a6d53fe02090d1de00fd5c4c068
                        "app_name": "Contest",
                        "app_id": 123456,
                        "title": "BIT",
                        "submit_button": {
                            "label": "Save",
<<<<<<< HEAD
                            "background_color": "#6666ff", 
                            "cta": "request",
                            "url": "http://bitone.herokuapp.com/createQuestion"
                        },
                         "reset_button": {
                            "label": "Reset",
                            "background_color": "#6666ff", 
                            "cta": "request",
                            "url": ""
                        },
                        "elements": [
                        {
                            "type": "text",
                            "style": "heading",
                            "content": "Select: "
                        },
                        {
                            "type":"input",
                            "name": "content",
                            "input_type":"text",
                            "label":"Content",
                            "required": true,
                            "placeholder": "Contest "
                        },
                        {
                            "type":"input",
                            "input_type":"textarea",
                            "name": "answerList",
                            "label":"Answer",
                            "required": true,
                            "placeholder": "answer1;answer2;..."
                        },
                         {
                            "type":"input",
                            "input_type":"textarea",
                            "name": "trueAnswer",
                            "label":"Question",
                            "required": true,
                            "placeholder": "1 or 2 or 3 or 4"
                        }]
                        }
                     }
                  });
        }
=======
                            "background_color": "#6666ff",
                            "cta": "request",
                            "url": "http://bitone.herokuapp.com/api-addQuestion"
                        },
                        "reset_button": {
                            "label": "Reset",
                            "background_color": "#6666ff",
                            "cta": "request",
                            "url": ""
                        },
                        "elements": [  
                            {
                                "type": "input",
                                "name": "question",
                                "input_type": "textarea",
                                "label": "Câu hỏi",
                                "required": true,
                                "placeholder": ""
                            },
                            {
                                "type": "input",
                                "input_type": "textarea",
                                "name": "answerA",
                                "label": "Đáp án A",
                                "required": true,
                                "placeholder": ""
                            },
                            {
                                "type": "input",
                                "input_type": "textarea",
                                "name": "answerB",
                                "label": "Đáp án B",
                                "required": true,
                                "placeholder": ""
                            },
                            {
                                "type": "input",
                                "input_type": "textarea",
                                "name": "answerC",
                                "label": "Đáp án C",
                                "required": true,
                                "placeholder": ""
                            },
                            {
                                "type": "input",
                                "input_type": "textarea",
                                "name": "answerD",
                                "label": "Đáp án D",
                                "required": true,
                                "placeholder": ""
                            },
                            {
                                "type": "radio",
                                "name": "trueAnswer",
                                "label": "Câu trả lời đúng",
                                "display_type": "inline",
                                "required": true,
                                "options": [
                                    {
                                        "label": "A",   //Tên hiển thị
                                        "value": "1"  //Giá trị
                                    },
                                    {
                                        "label": "B",
                                        "value": "2"
                                    },
                                    {
                                        "label": "C",
                                        "value": "3"
                                    },
                                    {
                                        "label": "D",
                                        "value": "4"
                                    }
                                ]
                            },
                            {
                                "type": "radio",
                                "name": "continueAdd",
                                "label": "Tiếp theo",
                                "display_type": "inline",
                                "required": true,
                                "options": [
                                    {
                                        "label": "Thêm tiếp câu hỏi",   //Tên hiển thị
                                        "value": "1"  //Giá trị
                                    },
                                    {
                                        "label": "Kết thúc thêm câu hỏi",
                                        "value": "0"
                                    }
                                ]
                            }
                        ]
                    }
                }
            });
        }
        else {
            let question = app.models.Question;
            return res.json(await question.pickQuestion());
            // return res.json({
            //     "data": {
            //     }
            // });
        };
>>>>>>> 6990bdd34f144a6d53fe02090d1de00fd5c4c068
    });
}