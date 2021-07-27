ymq_define("Html",["jquery","Config","jedate","dropdown","colpick"],(function(t,e,i){return class n{constructor(t){var i=this;i.instance=null,i.initJson=t,i.config=e.getInstance(),i.init()}initMemberVariables(){var t=this;t.optionHtml="",t.selectedYmqOption={},t.isShopify=!1,t.json={},t.validate=[],t.tool_text="",t.alert_text="",t.help_text="",t.variant_id=0,t.conditionJson={},t.needAddLabel=[],t.config.hasQuantity=!1,t.config.quantity_is_fix_type=!1,t.config.quantity_has_value=!0,t.config.max_num=999999}init(){this.initMemberVariables()}buildtHtml(){var t=this;return Object.keys(t.json).forEach((function(e){switch(t.beforeCreat(e),t.selectedYmqOption.type.toString()){case"1":t.creatField().doCreatOptionHtml();break;case"2":t.creatArea().doCreatOptionHtml();break;case"3":t.creatSelect().doCreatOptionHtml().initDropdown();break;case"4":t.creatRadio().doCreatOptionHtml();break;case"15":t.creatRadioButton().doCreatOptionHtml();break;case"5":t.creatCanvas().doCreatOptionHtml();break;case"6":t.creatCheckbox().doCreatOptionHtml();break;case"16":t.creatCheckboxButton().doCreatOptionHtml();break;case"7":t.creatSelect("multiple").doCreatOptionHtml().initDropdown();break;case"8":t.creatCanvas("checkbox").doCreatOptionHtml();break;case"9":case"10":t.creatDate().doCreatOptionHtml().initData();break;case"11":t.creatCustomeText().doCreatOptionHtml();break;case"12":t.creatFile().doCreatOptionHtml().initFile();break;case"13":t.creatSwitch().doCreatOptionHtml();break;case"14":t.creatColorPick().doCreatOptionHtml().initColpick();break;case"17":t.creatLayout().doCreatOptionHtml();break;case"18":t.creatFixedQuantity().doCreatOptionHtml();break;case"19":t.creatFixedQuantity(19).doCreatOptionHtml();break;case"100":t.setJson(t.config.ymq_option_template[t.config.tem_prefix+t.selectedYmqOption.id],t.config.ymq_option_template_condition[t.config.tem_prefix+t.selectedYmqOption.id]).buildtHtml().setJson(t.config.ymq_option_data,t.config.ymq_option_condition)}})),t}validateIsHasLabel(){return this.selectedYmqOption.label,this}beforeCreat(e){var i=this;if(i.selectedYmqOption=i.json[e],this.selectedYmqOption.hasOwnProperty("isShopify")?i.isShopify=!0:i.isShopify=!1,!i.isShopify){var n=t(`[name="${i.creatName(t(this).data("label"))}"]`);if(n.length>=1&&-1==t.inArray(i.selectedYmqOption.label,i.needAddLabel)){i.needAddLabel.push(i.selectedYmqOption.label);var a=n.eq(0).parents(".ymq-options-box"),o=i.creatName(a.data("label")+a.data("id"));console.log(o),a.attr("data-name",o),console.log(a.attr("id")),console.log(a.data("name")),n.each((function(){n.prop("name",o)}))}}return i.validateIsHasLabel(),i.buildValidate(),i.buildTooltip(),i.buildAlert(),i.buildHelp(),i}buildValidate(){var t=this;if(t.validate=[],1==Number(t.selectedYmqOption.required)&&t.validate.push("required"),(1==Number(t.selectedYmqOption.type)&&1==Number(t.selectedYmqOption.field_type)||2==Number(t.selectedYmqOption.type))&&(t.selectedYmqOption.min_char>0&&t.validate.push("minchar:"+t.selectedYmqOption.min_char),t.selectedYmqOption.max_char>0&&t.validate.push("maxchar:"+t.selectedYmqOption.max_char)),t.selectedYmqOption.hasOwnProperty("min_s")&&t.selectedYmqOption.min_s>0&&t.validate.push("min_s:"+t.selectedYmqOption.min_s),t.selectedYmqOption.hasOwnProperty("max_s")&&t.selectedYmqOption.max_s>0&&t.validate.push("max_s:"+t.selectedYmqOption.max_s),1==Number(t.selectedYmqOption.type))switch(t.selectedYmqOption.field_type){case"2":t.validate.push("email");break;case"3":t.validate.push("phone");break;case"4":t.validate.push("number"),t.selectedYmqOption.min>0&&t.validate.push("numbermin:"+t.selectedYmqOption.min),t.selectedYmqOption.max>0&&t.validate.push("numbermax:"+t.selectedYmqOption.max);break;case"5":t.selectedYmqOption.min>0&&t.validate.push("numbermin:"+t.selectedYmqOption.min),t.selectedYmqOption.max>0&&t.validate.push("numbermax:"+t.selectedYmqOption.max),t.validate.push("integer")}return t.validate.length>0?t.validate='data-validate="'+t.validate.join("|")+'"':t.validate="",t}buildTooltip(){var t=this;t.tool_text="",""!=t.selectedYmqOption.tooltip&&(t.tool_text=`<span class="ymq_tools ymq_tool_span" data-title="${t.selectedYmqOption.tooltip}"></span>`)}buildAlert(){var e=this;if(e.alert_text="",e.selectedYmqOption.hasOwnProperty("a_t1")||(e.selectedYmqOption.a_t1="",e.selectedYmqOption.a_t2="",e.selectedYmqOption.alert_text=""),e.selectedYmqOption.hasOwnProperty("alert_text")&&""!=e.selectedYmqOption.alert_text){var i="";""==!e.selectedYmqOption.a_t2&&(i=`<img class="ymq_img_alert" src="${e.selectedYmqOption.a_t2}">`),e.alert_text=`\n\t\t\t\t\t<div class="ymq_alert_box2" data-ymq-id="ymqdialogbox${e.selectedYmqOption.id}">\n\t\t\t\t\t\t${i+e.selectedYmqOption.a_t1}\n\t\t\t\t\t</div>`,t("body").append(`\n\t\t\t\t\t<div id="ymqdialogbox${e.selectedYmqOption.id}" data-width="${e.selectedYmqOption.a_width}" class="ymq-modal">\n\t\t\t\t      <span class="close-ymq-modal">\n\t\t\t\t          &#215;\n\t\t\t\t      </span>\n\t\t\t\t      <div class="ymq-modal-content">\n\t\t\t\t          ${e.selectedYmqOption.alert_text}\n\t\t\t\t      </div>\n\t\t\t\t    </div>\n\t\t\t\t`)}}buildHelp(){var t=this;t.help_text="",""!=t.selectedYmqOption.help&&(t.help_text=`<div class="ymq_help_box">${t.selectedYmqOption.help}</div>`)}doCreatOptionHtml(){var e=this,i="",n="",a="",o="",l="",s=Number(e.config.util.getValue(this.selectedYmqOption,"hide_title",0));if(null==e.selectedYmqOption)return e;if([18,19].includes(Number(e.selectedYmqOption.type))&&window.ymq_option.ymq_option_branding.extra.plan<3)return e;1==Number(e.selectedYmqOption.required)&&(l="required");var d=!0;if([18,19].includes(Number(e.selectedYmqOption.type))&&t.isEmptyObject(e.selectedYmqOption.options)&&(d=!1),11!=e.selectedYmqOption.type&&17!=e.selectedYmqOption.type&&d){i=`<div ${1==s?'style="display:none;"':""} class="${e.config.ymq_option_title}"><span class="ymq_lable ${l}">${e.selectedYmqOption.label}</span>${e.alert_text}${e.tool_text}<span class="ymq_option_text_span"></span><span class="ymq_option_price_span"></span></div>`;1==Number(e.selectedYmqOption.tooltip_position)?n=e.help_text:2==Number(e.selectedYmqOption.tooltip_position)?a=e.help_text:o=e.help_text}return this.optionHtml=`\n\t\t\t\t<div \n\t\t\t\t\tclass="ymq-options-box ymq-options-box-${this.selectedYmqOption.type} ${this.isShopify?"ymq-shopify-option-box":""} ${e.config.util.getValue(e.selectedYmqOption,"class","")}" \n\t\t\t\t\tid="${e.config.box_prefix}${this.selectedYmqOption.id}"\n\t\t\t\t\tdata-type="${this.selectedYmqOption.type}"\n\t\t\t\t\tdata-id="-${e.selectedYmqOption.id.toString().split("tem").join("-")}"\n\t\t\t\t\tdata-name="${this.creatName()}"\n\t\t\t\t\tdata-label="${this.selectedYmqOption.label}"\n\t\t\t\t\tdata-onetime="${this.getOneTime()}"\n\t\t\t\t\tdata-class="${e.config.attrib_prefix}${e.selectedYmqOption.id}"\n\t\t\t\t\t${e.validate}\n\t\t\t\t>\n\t\t\t\t\t${a}\n\t\t\t\t\t${i}\n\t\t\t\t\t${o}\n\t\t\t\t\t${e.optionHtml}\n\t\t\t\t\t<div class="ymq-error-box"></div>\n\t\t\t\t\t${n}\n\t\t\t\t</div>\n\t\t\t`,""!=e.optionHtml&&t("#ymq-box").append(e.optionHtml),e}getOneTime(){return this.config.util.getValue(this.selectedYmqOption,"onetime","0")}creatColorPick(){var t=this;return t.optionHtml=`\n\t\t\t\t<div class="ymq-input-color-box">\n\t\t\t\t\t<input readonly class="ymq-input-text ymq-input-color ${t.config.attrib_prefix}${t.selectedYmqOption.id}" type="text" id="${t.config.attrib_prefix}${t.selectedYmqOption.id}" data-id="${t.selectedYmqOption.id}" data-one_time="${t.selectedYmqOption.one_time}" data-price="${t.selectedYmqOption.price}" value="" name="${t.creatName()}">\n\t\t\t\t\t<div class="ymq-input-color-button"></div>\n\t\t\t\t</div>\n\t\t\t`,t}creatAccept(){var t="";return 1==this.selectedYmqOption.file_type&&(t='accept="image/*"'),t}creatFileMultiple(){var t=this,e='multiple="multiple"';return(1==t.selectedYmqOption.file_num||0!=t.config.util.getValue(t.selectedYmqOption,"cropped_type","0"))&&(e=""),e}creatFile(){var t=this;return t.optionHtml=`\n\t\t\t\t<div class="ymq_upload_new_box">\n\t\t\t\t\t<div class="ymq_upload_img_view spotlight-group">\n\t\t\t\t\t\t<label data-show="" id="ymq_upload${t.selectedYmqOption.id}" class="ymq_upload_new" style="z-index: 1;">\n\t\t\t\t\t\t\t<input ${t.creatAccept()} ${this.creatFileMultiple()} type="file" data-file-num="${t.selectedYmqOption.file_num}" data-rectangle-ratio="${t.config.util.getValue(t.selectedYmqOption,"rectangle_ratio","")}" data-file-type="${t.selectedYmqOption.file_type}" data-cropper="${t.config.util.getValue(t.selectedYmqOption,"cropped_type","0")}" style="display: none;" class="${t.config.attrib_prefix}${t.selectedYmqOption.id} ymq-options-file-input" name="${t.creatName()}" data-price="${t.selectedYmqOption.price}" id="${t.config.attrib_prefix}${t.selectedYmqOption.id}">\n\t\t\t\t\t\t\t<svg class="icon" style="width: 24px; height: 24px;vertical-align: middle;fill: currentColor;overflow: hidden;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2737"><path d="M662.63 545.37l-128-128a32 32 0 0 0-45.25 0l-128 128a32 32 0 1 0 45.25 45.25L480 517.25V872a32 32 0 0 0 64 0V517.25l73.37 73.37a32 32 0 1 0 45.25-45.25zM752 760H640a32 32 0 0 1 0-64h112c79.4 0 144-64.6 144-144a144 144 0 0 0-132.45-143.54 32 32 0 0 1-29.24-28C720.6 268.46 625 184 512 184s-208.6 84.46-222.31 196.45a32 32 0 0 1-29.24 28A144 144 0 0 0 128 552c0 79.4 64.6 144 144 144h112a32 32 0 0 1 0 64H272c-114.69 0-208-93.31-208-208a208.08 208.08 0 0 1 166.23-203.79C258 216.5 375 120 512 120s254 96.5 281.77 228.21A208.08 208.08 0 0 1 960 552c0 114.69-93.31 208-208 208z" p-id="2738"></path></svg>\n\t\t\t\t\t\t</label>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class="ymq_upload_box ymq_upload_file_view">\n\n\t\t\t\t</div>\n\t\t\t`,t}creatSwitch(){var t=this;return t.optionHtml=`\n\t\t\t\t\n\t\t\t\t<div>\n\t\t\t\t\t<input class="ymq-checkbox-radio ymq-Switch ${t.config.attrib_prefix}${t.selectedYmqOption.id}" type="checkbox" id="${t.config.attrib_prefix}${t.selectedYmqOption.id}" data-id="${t.selectedYmqOption.id}" data-one_time="${t.selectedYmqOption.one_time}" data-price="${t.selectedYmqOption.price}" value="${t.selectedYmqOption.switch_text}" name="${t.creatName()}" id="tool-${t.selectedYmqOption.id}" ${1==Number(t.selectedYmqOption.default)?"checked":""}>\n\t\t\t\t\t<label for="${t.config.attrib_prefix}${t.selectedYmqOption.id}">${t.selectedYmqOption.switch_text}</label>\n\t\t\t\t</div>\n\t\t\t`,t}creatField(){var t=this,e="";""!=t.selectedYmqOption.default_text&&null!=t.selectedYmqOption.default_text&&(e=`value="${t.selectedYmqOption.default_text}"`);var i="";return""!=t.selectedYmqOption.placeholder&&null!=t.selectedYmqOption.placeholder&&(i=`placeholder="${t.selectedYmqOption.placeholder}"`),t.optionHtml=`\n\t\t\t\t<input ${e} ${i} class="ymq-input-text ${t.config.attrib_prefix}${t.selectedYmqOption.id}" type="text" name="${t.creatName()}" data-price="${t.selectedYmqOption.price}" id="${t.config.attrib_prefix}${t.selectedYmqOption.id}">\n\t\t\t`,t}creatCustomeText(){var t=this;return t.optionHtml=`\n\t\t\t\t<div class="ymq_custome_text">${t.selectedYmqOption.html}</div>\n\t\t\t`,t}creatLayout(){var e=this;e.selectedYmqOption.hasOwnProperty("a_t1")||(e.selectedYmqOption.a_t1="",e.selectedYmqOption.a_t2="",e.selectedYmqOption.a_width="700",e.selectedYmqOption.alert_text="");var i="";return""==!e.selectedYmqOption.a_t2&&(i=`<img class="ymq_img_alert" src="${e.selectedYmqOption.a_t2}">`),""!=e.selectedYmqOption.alert_text?(e.optionHtml=`\n\t\t\t\t\t<div class="ymq_alert_box" data-ymq-id="ymqdialogbox${e.selectedYmqOption.id}">\n\t\t\t\t\t\t${i+e.selectedYmqOption.a_t1}\n\t\t\t\t\t</div>\n\t\t\t\t`,t("body").append(`\n\t\t\t\t\t<div id="ymqdialogbox${e.selectedYmqOption.id}" data-width="${e.selectedYmqOption.a_width}" class="ymq-modal">\n\t\t\t\t      <span class="close-ymq-modal">\n\t\t\t\t          &#215;\n\t\t\t\t      </span>\n\t\t\t\t      <div class="ymq-modal-content">\n\t\t\t\t          ${e.selectedYmqOption.alert_text}\n\t\t\t\t      </div>\n\t\t\t\t    </div>\n\t\t\t\t`)):e.optionHtml="",e}creatArea(){var t=this,e="";""!=t.selectedYmqOption.default_text&&null!=t.selectedYmqOption.default_text&&(e=t.selectedYmqOption.default_text);var i="";return""!=t.selectedYmqOption.placeholder&&null!=t.selectedYmqOption.placeholder&&(i=`placeholder="${t.selectedYmqOption.placeholder}"`),t.optionHtml=`\n\t\t\t\t<textarea ${i} class="ymq-input-text ${t.config.attrib_prefix}${t.selectedYmqOption.id}" data-price="${t.selectedYmqOption.price}" name="${t.creatName()}" id="${t.config.attrib_prefix}${t.selectedYmqOption.id}">${e}</textarea>\n\t\t\t`,t}creatSelect(t=""){var e=this,i=e.selectedYmqOption.options,n=e.conditionJson;for(var a in e.optionHtml=`\n\t                <select style="display: none;" multiple name="${e.creatName()}"  id="${e.config.attrib_prefix}${e.selectedYmqOption.id}" class="ymq-dropdown ${e.config.attrib_prefix}${e.selectedYmqOption.id} ${"multiple"==t?"ymq-multiple":""} ${e.isShopify?"ymq-shopify-option":""}" placeholder="${e.config.ymq_option_branding.lan.please_choose}">\n\t        `,i){var o=i[a],l="";0==Number(o.hasstock)?l=`data-title="${e.config.ymq_option_branding.lan.sold_out}" disabled`:n.hasOwnProperty(o.id)&&(l=`data-title="${n[o.id].disabled_text}"`),e.optionHtml+=`\n\t                <option ${l} ${1==Number(o.default)?"selected":""} class="${e.config.attrib_item_prefix}${o.id}" id="${e.config.attrib_prefix}${o.id}" data-id="${o.id}" data-one_time="${o.one_time}" data-price="${o.price}" value="${o.value}">${o.value}${e.config.getSelectButtonPrice(o.price,e.selectedYmqOption.type.toString())}</option>\n\t            `}return e.optionHtml+="\n\t                </select>\n\t        ",e}creatCheckboxButton(){return this.creatrcbtn("checkbox"),this}creatRadioButton(){return this.creatrcbtn(),this}creatrcbtn(t="radio"){var e=this,i=this.selectedYmqOption.options,n=e.conditionJson;for(var a in this.optionHtml="\n\t\t\t\t\t\n\t\t\t\t\t<div>\n\t\t\t\t",i){var o=i[a],l="",s="",d="";0==Number(o.hasstock)?(l=`data-title="${e.config.ymq_option_branding.lan.sold_out}"`,s="ymq_disabled_class ymq_sold_out",d="disabled"):n.hasOwnProperty(o.id)&&(l=`data-title="${n[o.id].disabled_text}"`,s="ymq_disabled_class ymq_condition_disabled"),this.optionHtml+=`\n\t\t\t \t\t<input ${d} ${l} class="ymq-options-button-input ${s} ${e.isShopify?"ymq-shopify-option":""} ${e.config.attrib_prefix}${e.selectedYmqOption.id}" id="${e.config.attrib_prefix}${o.id}" data-id="${o.id}" data-one_time="${o.one_time}" data-price="${o.price}" value="${o.value}" type="${t}" name="${e.creatName()}" id="tool-${o.id}" ${1==Number(o.default)?"checked":""}>\n\t\t\t\t    <label ${l} class="ymq-options-button-label ${e.config.attrib_item_prefix}${o.id}" for="${e.config.attrib_prefix}${o.id}">\n\t\t\t\t        ${o.value}${e.config.getSelectButtonPrice(o.price,e.selectedYmqOption.type.toString())}\n\t\t\t\t    </label>\n\t\t\t \t`}return this.optionHtml+="\n\t\t\t\t\t</div>\n\t\t\t",e}creatFixedQuantity(e=18){var i=this,n=this.selectedYmqOption.options,a=(i.conditionJson,1),o=i.config.util.getValue(i.config.ymq_option_branding.lan,"q-buy","Buy:"),l=i.config.util.getValue(i.config.ymq_option_branding.lan,"q-save","Save");if(1==i.config.hasQuantity)return this.optionHtml="",i.selectedYmqOption=null,i;if(i.config.hasQuantity=!0,i.config.quantity={},i.config.quantity.defalut_quantity=i.config.min_quantity,i.config.quantity.type=e,i.config.quantity.options={},18==Number(e)&&(i.config.quantity_is_fix_type=!0),t.isEmptyObject(n))this.optionHtml=`<input value="222"  type="hidden" name="${i.creatName()}" >`,i.config.quantity_has_value=!1;else{for(var s in this.optionHtml="\n\t\t\t\t\t\t<div>\n\t\t\t\t\t",n){var d=n[s];i.config.quantity.options[Number(d.quantity)]={quantity:Number(d.quantity),discount:Number(d.discount),discount_type:Number(d.discount_type)}}if(i.config.quantity.options[0]={quantity:0,discount:0,discount_type:2},19==e){var c="",p=0;for(var s in i.config.quantity.options){i.config.quantity.options[s];""!=c&&(i.config.quantity.options[c].quantity_max=s-1),1==p&&i.config.min_quantity>s&&(i.config.min_quantity=Number(s)),i.config.max_quantity<s&&(i.config.max_quantity=Number(s)),p++,i.config.quantity.options[s].quantity_max=i.config.max_num,c=s}}console.log(i.config.quantity.options,i.config.min_quantity,i.config.max_quantity),Object.keys(n).forEach((function(t,s){var d=n[t],c="";c=1==Number(d.discount_type)?`${d.discount}%`:`-${i.config.doFormat(d.discount)}`;var p="";if(p=""==d.discount||0==Number(d.discount)?`<span style="display:none !important;" class="ymq-quantity-discount-price" data-quantity="${d.quantity}" data-discount="${d.discount}" data-discount_type="${d.discount_type}">${i.config.doFormat(80)}</span><span class="ymq-quantity-compared-price-no-discount" data-quantity="${d.quantity}">${i.config.doFormat(100)}</span>`:`<span class="ymq-quantity-discount-price" data-quantity="${d.quantity}" data-discount="${d.discount}" data-discount_type="${d.discount_type}">${i.config.doFormat(80)}</span><span class="ymq-quantity-compared-price" data-quantity="${d.quantity}">${i.config.doFormat(100)}</span><span class="ymq-quantity-discount">${1==Number(d.discount_type)?l:""} ${c}</span>`,19==e){var m=!1;1==Number(d.default)&&(i.config.quantity.defalut_quantity=Number(d.quantity))}else{if(1==a){m=!0;i.config.quantity.defalut_quantity=Number(d.quantity)}else m=!1;1==Number(d.default)&&(i.config.quantity.defalut_quantity=Number(d.quantity))}i.optionHtml+=`\n\t\t\t\t\t<div class="ymq-quantity-radio-box">\n\t\t\t\t \t\t<input data-index="${s}" value="${d.quantity}"  class="ymq-checkbox-radio ymq-quantity-radio ymq-quantity-radio-${d.quantity}  ${i.isShopify?"ymq-shopify-option":""} ${i.config.attrib_prefix}${i.selectedYmqOption.id}" id="${i.config.attrib_prefix}${d.id}" data-id="${d.id}" type="radio" name="${i.creatName()}" id="tool-${d.id}" ${1==Number(d.default)||m?"checked":""}>\n\t\t\t\t\t    <label class="ymq-quantity-radio-label" for="${i.config.attrib_prefix}${d.id}"><span class="ymq-quantity-buy">${o}</span><span class="ymq-quantity-buy-quantity">${d.quantity}${19==e?"+":""}</span>${p}</label>\n\t\t\t\t \t</div>\n\t\t\t\t \t`,a++})),19==e&&(this.optionHtml+=`\n\t\t\t\t\t<div class="ymq-quantity-show-box ymq-quantity-radio-box">\n\t\t\t\t\t    <span><span class="ymq-quantity-buy">${o} </span><span class="ymq-quantity-buy-quantity">99+</span><span class="ymq-quantity-discount-price"></span><span class="ymq-quantity-compared-price"></span><span class="ymq-quantity-discount"> -€10.00</span></span>\n\t\t\t\t \t</div>\n\t\t\t\t \t`),this.optionHtml+="\n\t\t\t\t\t\t</div>\n\t\t\t\t"}return i}creatCheckbox(){return this.creatrc("checkbox"),this}creatRadio(){return this.creatrc(),this}creatrc(t="radio"){var e=this,i=this.selectedYmqOption.options,n=e.conditionJson;for(var a in this.optionHtml="\n\t\t\t\t\t<div>\n\t\t\t\t",i){var o=i[a],l="",s="",d="";0==Number(o.hasstock)?(l=`data-title="${e.config.ymq_option_branding.lan.sold_out}"`,s="ymq_disabled_class ymq_sold_out",d="disabled"):n.hasOwnProperty(o.id)&&(l=`data-title="${n[o.id].disabled_text}"`,s="ymq_disabled_class ymq_condition_disabled"),this.optionHtml+=`\n\t\t\t\t<div class="ymq_r_c_box ${e.config.attrib_item_prefix}${o.id}">\n\t\t\t \t\t<input ${d} ${l} class="ymq-checkbox-radio ${s} ${e.isShopify?"ymq-shopify-option":""} ${e.config.attrib_prefix}${e.selectedYmqOption.id}" id="${e.config.attrib_prefix}${o.id}" data-id="${o.id}" data-one_time="${o.one_time}" data-price="${o.price}" value="${o.value}" type="${t}" name="${e.creatName()}" id="tool-${o.id}" ${1==Number(o.default)?"checked":""}>\n\t\t\t\t    <label ${l} for="${e.config.attrib_prefix}${o.id}">${o.value} ${e.config.getSelectButtonPrice(o.price,e.selectedYmqOption.type.toString())}</label>\n\t\t\t \t</div>\n\t\t\t \t`}return this.optionHtml+="\n\t\t\t\t\t</div>\n\t\t\t",e}creatCanvas(t="radio"){var e=this,i=e.selectedYmqOption.options,n=e.conditionJson,a=!1,o=!1;1==e.config.util.getValue(e.config.ymq_option_branding.extra,"img-option-bigger",1)&&(a=!0),2==e.config.util.getValue(e.config.ymq_option_branding.extra,"img-option-bigger",1)&&(o=!0),3==e.config.util.getValue(e.config.ymq_option_branding.extra,"img-option-bigger",1)&&(a=!0,o=!0);var l="";for(var s in e.selectedYmqOption.hasOwnProperty("style")&&2==Number(e.selectedYmqOption.style)&&(2==Number(e.selectedYmqOption.zoom)?(a=!0,o=!1):3==Number(e.selectedYmqOption.zoom)?(a=!1,o=!1):4==Number(e.selectedYmqOption.zoom)?(a=!1,o=!0):5==Number(e.selectedYmqOption.zoom)&&(a=!0,o=!0),""!=e.selectedYmqOption.width&&(l+=`width:${e.selectedYmqOption.width}px;`),""!=e.selectedYmqOption.height&&(l+=`height:${e.selectedYmqOption.height}px;`),""!=e.selectedYmqOption.b_radius&&(l+=`border-radius: ${e.selectedYmqOption.b_radius}px;`)),this.optionHtml='\n\t\t\t\t\t<div class="spotlight-group">\n\t\t\t\t',i){var d=i[s],c="",p="",m="";0==Number(d.hasstock)?(c=`data-title="${e.config.ymq_option_branding.lan.sold_out}"`,p="ymq_disabled_class ymq_sold_out",m="disabled"):n.hasOwnProperty(d.id)&&(c=`data-title="${n[d.id].disabled_text}"`,p="ymq_disabled_class ymq_condition_disabled");var r=d.value;2==d.canvas_type?(o&&(r=`<img class='ymq_tooltip_switch_img' src='${d.canvas2}'><br>${d.value}`),this.optionHtml+=`\n\t\t\t\t \t\t<input ${m} ${c} class="ymq-options-img-input ${p} ${e.isShopify?"ymq-shopify-option":""} ${e.config.attrib_prefix}${e.selectedYmqOption.id}" id="${e.config.attrib_prefix}${d.id}" data-id="${d.id}" data-one_time="${d.one_time}" data-price="${d.price}" value="${d.value}" type="${t}" name="${e.creatName()}" id="tool-${d.id}" ${1==Number(d.default)?"checked":""}>\n\t\t\t\t\t    <label ${c} data-show="${r}" style="${l}background: url(${e.config.util.getShopifySmallImg(d.canvas2)}) center top / cover;" class="ymq-options-img-label ymq-dicopy" data-addclass="ymq_tooltip_switch_img_box" for="${e.config.attrib_prefix}${d.id}">\n\t\t\t\t\t    `,a&&(this.optionHtml+=`\n\t\t\t\t\t    <div class="spotlight" data-src="${d.canvas2}" data-description="${d.value}"></div>\n\t\t\t\t\t\t`),e.config.util.getValue(e.config.ymq_option_branding.img,"--img-selected-upper-url","")&&(this.optionHtml+=`<img class="ymq-selected-img-up-img ymq-img-up-img" src="${e.config.util.getValue(e.config.ymq_option_branding.img,"--img-selected-upper-url","")}" alt="">`),e.config.util.getValue(e.config.ymq_option_branding.img,"--img-disabled-upper-url","")&&(this.optionHtml+=`<img class="ymq-disabled-img-up-img ymq-img-up-img" src="${e.config.util.getValue(e.config.ymq_option_branding.img,"--img-disabled-upper-url","")}" alt="">`),this.optionHtml+="\n\t\t\t\t\t    </label>\n\t\t\t\t \t"):(this.optionHtml+=`\n\t\t\t\t\t\t<input ${m} ${c} class="ymq-options-img-input ${p} ${e.isShopify?"ymq-shopify-option":""} ${e.config.attrib_prefix}${e.selectedYmqOption.id}" id="${e.config.attrib_prefix}${d.id}" data-id="${d.id}" data-one_time="${d.one_time}" data-price="${d.price}" value="${d.value}" type="${t}" name="${e.creatName()}" id="tool-${d.id}" ${1==Number(d.default)?"checked":""}>\n\t\t\t\t\t    <label ${c} data-show="${r}" style="${l}background-color: #${d.canvas1};" class="ymq-options-img-label ymq-dicopy" for="${e.config.attrib_prefix}${d.id}">\n\t\t\t\t\t    \n\t\t\t\t \t`,e.config.util.getValue(e.config.ymq_option_branding.img,"--img-selected-upper-url","")&&(this.optionHtml+=`<img class="ymq-selected-img-up-img ymq-img-up-img" src="${e.config.util.getValue(e.config.ymq_option_branding.img,"--img-selected-upper-url","")}" alt="">`),e.config.util.getValue(e.config.ymq_option_branding.img,"--img-disabled-upper-url","")&&(this.optionHtml+=`<img class="ymq-disabled-img-up-img ymq-img-up-img" src="${e.config.util.getValue(e.config.ymq_option_branding.img,"--img-disabled-upper-url","")}" alt="">`),this.optionHtml+="\n\t\t\t\t\t    </label>\n\t\t\t\t \t")}return this.optionHtml+="\n\t\t\t\t</div>\n\t\t\t",e}creatDate(){var t=this;return t.optionHtml=`\n\t\t\t\t\t\n\t\t\t\t    <input class="ymq-input-text ${t.config.attrib_prefix}${t.selectedYmqOption.id}" data-price="${t.selectedYmqOption.price}" readonly type="text" name="${t.creatName()}" id="${t.config.attrib_prefix}${t.selectedYmqOption.id}">\n\t\t\t`,t}creatMultipleName(t){return t}creatName(e=null){var i=this;return e?i.creatMultipleName(`properties[${e}]`):i.isShopify?"ymq-option"+(i.selectedYmqOption.optionsIndex- -1):-1!=t.inArray(i.selectedYmqOption.label,i.needAddLabel)?i.creatMultipleName(`properties[${i.selectedYmqOption.label}-${i.selectedYmqOption.id.toString().split("tem").join("-")}]`):i.creatMultipleName(`properties[${i.selectedYmqOption.label}]`)}initData(){var e=this,n={};n={theme:e.config.ymq_jedateblue,isToday:!1,onClose:!1,trigger:"click",language:e.config.ymq_enLang,format:e.selectedYmqOption.date_format,donefun:function(e){t(e.elem).change()}},10==Number(e.selectedYmqOption.type)&&(n.range=" ~ ",n.multiPane=!1);var a="",o="";1==Number(e.selectedYmqOption.date_minDateType)?a=(new Date).Format("yyyy-MM-dd")+" ":2==Number(e.selectedYmqOption.date_minDateType)&&(a=e.selectedYmqOption.min_date+" "),1==Number(e.selectedYmqOption.date_maxDateType)?o=(new Date).Format("yyyy-MM-dd")+" ":2==Number(e.selectedYmqOption.date_maxDateType)&&(o=e.selectedYmqOption.max_date+" "),a+e.selectedYmqOption.min_time!=""&&(n.minDate=a+e.selectedYmqOption.min_time),o+e.selectedYmqOption.max_time!=""&&(n.maxDate=o+e.selectedYmqOption.max_time);var l="";e.selectedYmqOption.day_limit.length>0&&(l="%"+e.selectedYmqOption.day_limit.join(",%"));var s="";return e.selectedYmqOption.weekly_limit.length>0&&(s="ymq"+(s=e.selectedYmqOption.weekly_limit.join("-"))),l+s!=""&&(n.valiDate=[l+s,!1]),i("#"+e.config.attrib_prefix+e.selectedYmqOption.id,n),this}initDropdown(e=null){var i=this;return e||(e=t("#"+i.config.attrib_prefix+i.selectedYmqOption.id)),e.dropdown({variantChange:function(t){t.hasClass("ymq-shopify-option")}}),i}initColpick(){var e=this;return t("#"+e.config.attrib_prefix+e.selectedYmqOption.id).colpick({submit:0,onChange:function(e,i,n,a,o){t(a).next().css("background","#"+i),t(a).val("#"+i),t(a).trigger("keyup")}}),e}initFile(){return this}setJson(t={},e={}){var i=this;return i.json=t,i.conditionJson=e,i}static getInstance(t){return this.instance||(this.instance=new n(t)),this.instance}}}));