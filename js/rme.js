let pageData = (function () {
  return [
    "0_info.html",
    "1_rmpy_precedence.html",
    "152_associativity.html",
    "153_in_not_in_membership_test.html",
    "147_mnemonics_xkcd.html",
    "2_rmpy_history.html",
    "3_print.html",
    "144_printf_string_format.html",
    "126_format_str_method.html",
    "143_f_string_format.html",
    "146_repr.html",
    "4_rmpy_comments.html",
    "5_rmpy_variables.html",
    "6_rmpy_string_str.html",
    "7_pass_by_reference_value.html",
    "8_replicate_pass_by_reference.html",
    "184_pass_by_object_sharing.html",
    "150_memory_management.html",
    "9_getreferencecount.html",
    "151_intern.html",
    "162_hashable.html",
    "11_is_is_not_operators.html",
    "100_x_memory_view.html",
    "10_locals_globals_fn.html",
    "12_lists.html",
    "13_modulo.html",
    "14_floor_division.html",
    "15_data_types.html",
    "16_identifiers.html",
    "17_tuples.html",
    "18_sets.html",
    "19_dictionary.html",
    "155_compound_statements.html",
    "156_if_elif_else.html",
    "121_x_truthy_falsy.html",
    "181_nan.html",
    "122_x_bool.html",
    "157_walrus_assignment_expression.html",
    "128_conditional_expression_ternary_operator.html",
    "159_regular_expression_regex.html",
    "160_translate_maketrans.html",
    "105_x_list_tuple_set_dict.html",
    "101_x_bytes.html",
    "119_bytes_object.html",
    "186_bytearray.html",
    "102_x_zip.html",
    "103_x_list_comprehensions.html",
    "104_x_star_and_starstar_args_unpack.html",
    "106_x_lambda.html",
    "107_x_map.html",
    "108_x_filter.html",
    "109_x_reduce.html",
    "110_x_iterators.html",
    "111_x_generators.html",
    "112_x_generator_expression_comprehension.html",
    "113_x_idle.html",
    "114_x_slice.html",
    "115_x_chr_and_ord.html",
    "116_x_casting.html",
    "117_x_bitwise_operators.html",
    "118_x_logical_operators.html",
    "120_x_keywords.html",
    "123_x_strip_str_method.html",
    "125_x_replace_str_method.html",
    "127_x_insert_list_method.html",
    "129_modules.html",
    "130_x_int.html",
    "131_x_input.html",
    "132_xxx_1_topic.html",
    "133_x_divmod.html",
    "134_x_float.html",
    "135_x_math.html",
    "136_x_buzzfizz.html",
    "137_x_leapyear.html",
    "138_x_any.html",
    "139_x_all.html",
    "140_x_random_randint_randrange.html",
    "141_prime_number.html",
    "167_eval.html",
    "168_len.html",
    "171_min_max.html",
    "172_sorted.html",
    "173_functions.html",
    "174_docstring.html",
    "182_triple_quoted_strings.html",
    "183_indentation.html",
    "175_dir.html",
    "176_boolean_operations_and_or_not.html",
    "178_underscore_last_evaluation.html",
    ".\179_random.html",
    "142_armstrong_number.html",
    "170_x_alphabet_sequence.html",
    "188_read_write_file_open.html", 
    "189_with.html",
    "190__main__and__name__.html",
    "191_sys_module.html",
    "193_os_os_dot_path_modules.html",
    "148_notes_jason_one.html",
    "149_notes_jason_two.html",
    "154_notes_jason_three.html",
    "161_mod_7_janani_ravi_list_tuple.html",
    "163_mod_7_janani_ravi_sets_dictionary.html",
    "164_mod_7_list_methods_Al_Sweigart_abswp.html",
    "169_mod_7_sample_code.html",
    "192_mod_9_sample_code.html",
    "165_revision_list_tuple_set_dictionary_string_comparison_table.html",
    "166_revision_list_tuple_set_dictionary_string_comparison_table_two.html",
    "177_tutorials_teacher_questions.html",
    "rmpy_template.html"

  ];

})();

(function (arg) {
  'use strict';
  var pageCounter = 0;
  const pageOrder = arg;

  //Functions
  function insertContents(cb) {
    return function insert() {
      var parser = new DOMParser();
      var htmlDoc = parser.parseFromString(this.responseText, 'text/html');
      document.getElementsByTagName('header')[0].firstElementChild.innerHTML = htmlDoc.body.firstElementChild.children[0].innerHTML;
      document.getElementsByClassName('counter')[0].innerHTML = pageCounter + 1;
      document.getElementsByTagName('main')[0].innerHTML = htmlDoc.body.firstElementChild.children[2].innerHTML;
      document.getElementsByClassName('syntax')[0].innerHTML = htmlDoc.body.firstElementChild.children[3].innerHTML;
      document.getElementsByClassName('examples')[0].innerHTML = htmlDoc.body.firstElementChild.children[4].innerHTML;
      document.getElementsByClassName('notes')[0].innerHTML = htmlDoc.body.firstElementChild.children[5].innerHTML;
      document.getElementsByClassName('file_name')[0].innerHTML = `<a href="../html/${pageOrder[pageCounter]}" target="_blank">${pageOrder[pageCounter]}</a>`;
      drawOnCanvas();
      cb();
      closeAllTwo();
      form();
      toggleClass('div-two', 'relative', 'Relative');
      toggleClass('div-one', 'relative', 'Relative');
      toggleClass('div-three', 'relative', 'Relative');
      toggleClass('div-four', 'absolute', 'Absolute');
      toggleClass('div-five', 'absolute', 'Absolute');
      toggleClass('div-six', 'absolute', 'Absolute');
      createStyleSheet();
      inheritanceEventListener();
      togVisEventListener();
      togDisplayEventListener();
      viewportEventListenerHelper();
    };
  }

  function makeRequest(url, fn) {
    let oReq = new XMLHttpRequest();
    oReq.addEventListener("load", fn);
    oReq.open('GET', url);
    oReq.send();
  }

  function makePostRequest(url, params, fn) {
    let oReq = new XMLHttpRequest();
    oReq.addEventListener("load", fn);
    oReq.open('POST', url);
    oReq.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    // oReq.setRequestHeader("Content-length", params.length);
    // oReq.setRequestHeader("Connection", "close");
    oReq.send(params);
  }

  function callback() {
    console.log('hello from callback');
    var script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-svg.js';
    script.async = true;
    document.head.appendChild(script);
    MathJax.typeset()
  }

  function sectionForward() {
    if (pageCounter < pageOrder.length - 1) {
      ++pageCounter;
    }
    makeRequest(`./html/${pageOrder[pageCounter]}`, insertContents(callback));
    document.getElementsByClassName('file_name')[0].innerHTML = pageOrder[pageCounter];

  }

  function sectionBack() {
    if (pageCounter > 0) {
      --pageCounter;
      makeRequest(`./html/${pageOrder[pageCounter]}`, insertContents(callback));
      document.getElementsByClassName('file_name')[0].innerHTML = pageOrder[pageCounter];
    }
  }

  function openAll() {
    let temp = document.getElementsByTagName('details');

    for (let i = 0; i < temp.length; i++) {
      temp[i].open = "open";
    }

    document.getElementById('open_all').style.display = 'none';
    document.getElementById('close_all_two').style.display = 'inline';
    document.getElementById('close_all').style.display = 'none';
    document.getElementById('open_all_two').style.display = 'inline';
  }

  function openAllTwo() {
    let temp = document.getElementsByTagName('details');

    for (let i = 0; i < temp.length; i++) {
      temp[i].open = "open";
    }

    document.getElementById('close_all_two').style.display = 'none';
    document.getElementById('open_all').style.display = 'inline';
    document.getElementById('close_all').style.display = 'inline';
    document.getElementById('open_all_two').style.display = 'none';
  }

  function closeAll() {
    let temp = document.getElementsByTagName('details');

    for (let i = 0; i < temp.length; i++) {
      temp[i].removeAttribute('open');
    }
    document.getElementById('open_all').style.display = 'none';
    document.getElementById('close_all_two').style.display = 'inline';
    document.getElementById('close_all').style.display = 'none';
    document.getElementById('open_all_two').style.display = 'inline';

  }

  function closeAllTwo() {
    let temp = document.getElementsByTagName('details');
    for (let i = 0; i < temp.length; i++) {
      temp[i].removeAttribute('open');
    }

    document.getElementById('open_all').style.display = 'inline';
    document.getElementById('close_all_two').style.display = 'none';
    document.getElementById('close_all').style.display = 'inline';
    document.getElementById('open_all_two').style.display = 'none';
  }

  function toggleClass(id, toggleClass, toggleMsg) {
    if (document.getElementById(id)) {
      document.getElementById(id).addEventListener('click', function () {
        if (this.classList.contains(toggleClass)) {
          this.classList.remove(toggleClass);
          this.innerHTML = "Static";

        } else {
          this.classList.add(toggleClass);
          this.innerHTML = toggleMsg;

        }
      });
    }
  }

  (function populateDatalist() {
    for (let i = 0; i < pageOrder.length; i++) {
      var el = document.createElement('option');
      el.textContent = pageOrder[i];
      document.getElementById('dlist_data').appendChild(el);
    }

  })();

  function selectFromDatalist() {
    if (document.getElementById('dlist_search').value.length > 4) {
      makeRequest(`./html/${document.getElementById('dlist_search').value}`, insertContents(callback));
      pageCounter = parseInt(pageOrder.indexOf(document.getElementById('dlist_search').value), 10);
      // console.log(document.getElementById('dlist_search').value.length);
    }
  }

  function resetInputBox() {
    document.getElementById('dlist_search').value = "";
  }

  // Event Listeners
  document.getElementById('btn-forward').addEventListener('click', sectionForward);
  document.getElementById('btn-back').addEventListener('click', sectionBack);
  document.getElementById('open_all').addEventListener('click', openAll);
  document.getElementById('close_all_two').addEventListener('click', closeAllTwo);
  document.getElementById('close_all').addEventListener('click', closeAll);
  document.getElementById('open_all_two').addEventListener('click', openAllTwo);
  document.getElementById('dlist_search').addEventListener('input', selectFromDatalist);
  document.getElementById('dlist_search').addEventListener('blur', resetInputBox);
  window.addEventListener('DOMContentLoaded', function () {
    makeRequest(`./html/${pageOrder[0]}`, insertContents(callback));
  });


  function drawOnCanvas() {
    let el = document.getElementsByTagName('canvas')[0] || null;
    if (el && el.getContext) {
      let ctx = el.getContext('2d');
      ctx.fillStyle = "red";
      ctx.fillRect(25, 50, 50, 50);
      ctx.clearRect(37.5, 62.5, 25, 25);
      ctx.strokeStyle = getComputedStyle(document.documentElement).getPropertyValue('--stroke-style')
      ctx.beginPath();
      ctx.arc(150, 75, 25, 0, 2 * Math.PI);
      ctx.stroke();
      ctx.closePath();
      ctx.beginPath();
      ctx.arc(150, 75, 12.5, 0, 2 * Math.PI);
      ctx.fill();
      ctx.closePath();
      ctx.beginPath();
      ctx.moveTo(250, 50);
      ctx.lineTo(275, 100);
      ctx.lineTo(225, 100);
      ctx.fill();
      ctx.closePath();
    }
  }

  function generateParams(...args) {
    var tmp = "";
    if (args.length < 3) {
      tmp += `${args[0]}=${args[1]}`;
    } else {
      tmp += `${args[0]}=${args[1]}`;
      for (let i = 2; i < args.length; i += 2) {
        tmp += `&${args[i]}=${args[i + 1]}`;
      }
    }
    return tmp;
  }

  function upperCaseFirstLetter(str) {
    return `${str.trim().charAt(0).toUpperCase()}${str.trim().substring(1)}`;
  }

  function form() {
    if (document.getElementById('form_one')) {
      document.getElementById('form_one').addEventListener('submit', function (event) {
        if (checkField(event, 'uid')) {
          event.preventDefault();
          var name = document.getElementById('form_one')[1].value;
          var param2 = document.getElementById('form_one')[2].value;
          var params = generateParams('name', name, 'param2', param2);
          console.log("%c %s", "color:red", params)
          makePostRequest("http://php.tomgdow.com", params, ajaxCallMe());
        }
      });
    }

    if (document.getElementById('form_two')) {
      document.getElementById('form_two').addEventListener('submit', function (event) {
        if (checkField(event, 'uname')) {
          event.preventDefault();
          var name = document.getElementById('form_two')[1].value;
          var param2 = document.getElementById('form_two')[2].value;
          makeRequest(
            addQueryStringToUrl('http://phptwo.tomgdow.com', 'name', name, 'param2', param2), ajaxCallMe2()
          );
        }
      });
    }

    if (document.getElementById('form_three')) {
      document.getElementById('form_three').addEventListener('submit', function (event) {
        if (checkField(event, 'uname2')) {
          event.preventDefault();
          var name = document.getElementById('form_three')[1].value;
          var colors = document.getElementsByName('color');
          var color_val;
          for (var i = 0; i < colors.length; i++) {
            if (colors[i].checked) {
              color_val = colors[i].value;
            }
          }
          var param2 = color_val;
          var params = generateParams('name', name, 'param2', param2);
          console.log('%c %s', 'color:red', params);
          makePostRequest("http://php.tomgdow.com", params, ajaxCallMe3());
        }

      });
    }

    if (document.getElementById('form_four')) {
      document.getElementById('form_four').addEventListener('submit', function (event) {
        if (checkField(event, 'uname4')) {
          event.preventDefault();
          var name = document.getElementById('form_four')[1].value;
          let cbox = document.querySelectorAll('.clang-checkbox');

          var tmparr = [];
          for (let i = 0; i < cbox.length; i++) {
            if (cbox[i].checked) {
              tmparr.push(cbox[i].name);
              tmparr.push(cbox[i].value);
            }
          }

          makeRequest(
            addQueryStringToUrl('http://phptwo.tomgdow.com', 'name', name, ...tmparr), ajaxCallMe4()
          );
        }

      });
    }

    if (document.getElementById('form_five')) {
      document.getElementById('form_five').addEventListener('submit', function (event) {
        if (checkField(event, 'uname5')) {
          event.preventDefault();
          let name = document.getElementById('form_five')[1].value;
          let county = document.getElementById('form_five')[2].value;

          // console.log("%c %s", "color:red", name);
          var param2 = county;
          var params = generateParams('name', name, 'param2', param2);
          makePostRequest("http://php.tomgdow.com", params, ajaxCallMe5());

        }

      });
    }

    if (document.getElementById('form_six')) {
      document.getElementById('form_six').addEventListener('submit', function (event) {
        if (true) {
          event.preventDefault();
          let name = document.getElementById('form_six')[1].value;
          let txt = document.getElementById('form_six')[2].innerHTML;

          console.log("%c %s", "background-color:blue", name);
          var param2 = txt;
          var params = generateParams('name', name, 'param2', param2);
          makePostRequest("http://php.tomgdow.com", params, ajaxCallMe6());

        }

      });
    }

    if (document.getElementById('uid')) {
      document.getElementById('uid').addEventListener('focus', function () {
        document.getElementsByClassName('msg_name')[0].style.backgroundColor = "white";
        document.getElementsByClassName('msg_name')[0].innerText = "";
        document.getElementById('out-name').innerText = "";
        document.getElementById('out-email').innerText = "";
      });
    }

    if (document.getElementById('uname')) {
      document.getElementById('uname').addEventListener('focus', function () {
        document.getElementsByClassName('msg_name')[0].style.backgroundColor = "white"
        document.getElementsByClassName('msg_name')[0].innerText = "";
        document.getElementById('name-county').innerText = "";
      });
    }

    if (document.getElementById('uname2')) {
      document.getElementById('uname2').addEventListener('focus', function () {
        document.getElementsByClassName('msg_name')[0].style.backgroundColor = "white"
        document.getElementsByClassName('msg_name')[0].innerText = "";
        document.getElementById('out-name-two').innerText = "";
        document.getElementById('name-color').innerText = "";
      });
    }

    if (document.getElementById('uname4')) {
      document.getElementById('uname4').addEventListener('focus', function () {
        document.getElementsByClassName('msg_name')[0].style.backgroundColor = "white"
        document.getElementsByClassName('msg_name')[0].innerText = "";
        document.getElementById('out-name-clang').innerText = "";
      });
    }

    if (document.getElementById('uname5')) {
      document.getElementById('uname5').addEventListener('focus', function () {
        document.getElementsByClassName('msg_name')[0].style.backgroundColor = "white"
        document.getElementsByClassName('msg_name')[0].innerText = "";
        document.getElementById('out-county').innerText = "";
      });
    }
  }

  function checkField(event, in_id) {
    event.preventDefault();
    let tmp = document.getElementById(in_id);
    if (tmp.value === '') {
      var msgName = document.getElementsByClassName('msg_name')[0];
      msgName.innerHTML = "!Required field";
      msgName.style.backgroundColor = "red";
      return false;
    }
    return true;
  }

  function addQueryStringToUrl(url, ...args) {
    var tmp = url + '?=';
    if (args.length < 3) {
      // console.log(args);
      tmp = `${tmp}${args[0]}=${args[1]}`;
    } else {
      tmp = `${tmp}${args[0]}=${args[1]}`;
      for (let i = 2; i < args.length; i += 2) {
        tmp += `&${args[i]}=${args[i + 1]}`;
      }
    }
    return tmp;
  }

  function ajaxCallMe() {
    return function ajax() {
      let response = this.responseText.split(',');
      let responseString = `Greetings from PHP Server (POST Method),
             ${upperCaseFirstLetter(response[0])}`;
      let responseString2 = `Your email address is ${response[1]}`;
      document.getElementById('out-name').value = responseString;
      document.getElementById('out-email').value = responseString2;
    };
  }

  // function ajaxCallMe2() {
  //   return function ajax2() {
  //     let response = this.responseText.substring(2).split('&');
  //     let responseString = `Greetings from the PHP Server (GET Method), ${(response[0].split('=')[1]).toUpperCase()}, from ${(response[1].split('=')[1]).toUpperCase()} `;
  //     document.getElementById('name-county').value = responseString;
  //   };
  // }

  // function ajaxCallMe3() {
  //   return function ajax() {
  //     let response = this.responseText.split(',');
  //     let responseString = `Greetings from PHP Server (POST Method), ${upperCaseFirstLetter(response[0])}.`;
  //     let responseString2 = `Your favourite color is ${response[1]}`;
  //     document.getElementById('out-name-two').value = responseString;
  //     document.getElementById('name-color').value = responseString2;
  //   };
  // }

  // function ajaxCallMe4() {
  //   return function ajax2() {
  //     let response = this.responseText.substring(2).split('&');
  //     console.log(response);
  //     let responseStringName = `Greetings from the PHP Server (GET Method), ${(response[0].split('=')[1]).toUpperCase()}. `
  //     document.getElementById('out-name-clang').value = responseStringName + favLangHelper(response)
  //   };
  // }

  // function ajaxCallMe4() {
  //   return function ajax2() {
  //     let response = this.responseText.substring(2).split('&');
  //     console.log(response);
  //     let responseStringName = `Greetings from the PHP Server (GET Method), ${(response[0].split('=')[1]).toUpperCase()}. `
  //     document.getElementById('out-name-clang').value = responseStringName + favLangHelper(response)
  //   };
  // }

  // function ajaxCallMe5() {
  //   return function ajax2() {
  //     let response = this.responseText.split(',');
  //     // console.log("%c %s", "color:green", response);
  //     let responseStringName = `Greetings from the PHP Server (POST Method), ${upperCaseFirstLetter(response[0])}. `
  //     let responseStringFavCounty = `Your favourite county is ${upperCaseFirstLetter(response[1])}`;
  //     document.getElementById('out-county').value = responseStringName + responseStringFavCounty;
  //   };
  // }
  // function ajaxCallMe6() {
  //   return function ajax2() {
  //     let response = this.responseText.split(',');
  //     // console.log("%c %s", "color:green", response);
  //     let responseStringName = `Greetings from the PHP Server (POST Method), ${upperCaseFirstLetter(response[0])}. `
  //     let responseStringCommentPreamble = `Your comment is: `;
  //     let responseStringComment = response[1];
  //     document.getElementById('out-txtarea').value = responseStringName + responseStringCommentPreamble;
  //     document.getElementById('out-txtarea-user-comment').value = responseStringComment;
  //   };
  // }


  function favLangHelper(arr) {
    let tmp = "";
    let responseStringNone = "Your have not chosen any favourite language! ";
    let responseStringSingular = "Your favourite language is ";
    let responseStringPlural = "Your favourite languages are ";
    if (arr.length === 1) {
      tmp = responseStringNone;
    }
    if (arr.length === 2) {
      tmp = responseStringSingular + arr[1].split('=')[1];
    }
    if (arr.length > 2) {
      tmp = `${responseStringPlural} ${arr[1].split('=')[1]}`;

      if (arr.length > 3) {
        for (let i = 2; i < arr.length - 1; i++) {
          tmp += `, ${arr[i].split('=')[1]}`
        }
      }
      tmp += ` and ${arr[arr.length - 1].split('=')[1]}`;
    }

    return tmp;
  }

  function createStyleSheet() {
    if (document.getElementById('inheritance_example_btn')) {
      var sheet = document.createElement('style');
      var txt = document.createTextNode("a {color:red}");
      sheet.appendChild(txt);
      sheet.id = 'sheet';
      document.getElementsByTagName('head')[0].appendChild(sheet);
      sheet.disabled = true;
    }

  }

  function toggle_anchor_class() {
    var sheet = document.getElementById('sheet');
    if (sheet.disabled === true) {
      sheet.disabled = false;
      this.innerHTML = "Remove Class"
      document.getElementById('inheritance_added_css_class').style.visibility = "visible";
    } else {
      sheet.disabled = true;
      this.innerHTML = 'Add Class';
      document.getElementById('inheritance_added_css_class').style.visibility = "hidden";
    }
  }

  function inheritanceEventListener() {
    let x = document.getElementById('inheritance_example_btn');
    if (x) {
      x.addEventListener('click', toggle_anchor_class);
    }
  }


  function toggleVis(x) {
    x.style.visibility !== 'hidden' ? x.style.visibility = 'hidden' : x.style.visibility = 'visible';
  }

  function toggleDisplay(x) {
    x.style.display !== 'none' ? x.style.display = 'none' : x.style.display = '';
  }

  function togVisEventListener() {
    let y = document.getElementById('tog_vis');
    if (y) {
      y.addEventListener('click', function (event) {
        event.preventDefault();
        toggleVis(document.getElementsByClassName('vis_one')[0]);
      });
    }

  }

  function togDisplayEventListener() {
    let x = document.getElementById('tog_display');
    if (x) {
      x.addEventListener('click', function () {
        toggleDisplay(document.getElementsByClassName('vis_one')[0]);
      });
    }
  }

  function viewportTableHover(x, y, color) {
    x.addEventListener('mouseover', function () {
      x.style.backgroundColor = color;
      y.style.backgroundColor = color;
    })

    y.addEventListener('mouseover', function () {
      x.style.backgroundColor = color;
      y.style.backgroundColor = color;
    })

    x.addEventListener('mouseout', function () {
      x.style.backgroundColor = 'initial';
      y.style.backgroundColor = 'initial';

    })

    y.addEventListener('mouseout', function () {
      x.style.backgroundColor = 'initial';
      y.style.backgroundColor = 'initial';

    })
  }

  function viewportEventListenerHelper() {
    if (document.getElementById('viewport_expt_3')) {
      let temp = document.getElementById('viewport_expt_3');
      let x = temp.querySelectorAll('tr')[1];
      let y = temp.querySelectorAll('tr')[2];
      let x2 = temp.querySelectorAll('tr')[3];
      let y2 = temp.querySelectorAll('tr')[4];
      let x3 = temp.querySelectorAll('tr')[5];
      let y3 = temp.querySelectorAll('tr')[6];
      viewportTableHover(x, y, 'lightgray');
      viewportTableHover(x2, y2, 'lightgray');
      viewportTableHover(x3, y3, 'lightgray');
    }
  }

  window.MathJax = {
    tex: {
      inlineMath: [
        ['$', '$'],
        ['\\(', '\\)']
      ]
    },
    svg: {
      fontCache: 'global'
    }
  };


})(pageData);
