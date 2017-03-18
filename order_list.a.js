/*
	@주문관리스크립트		10/20/2015 KJI
	*주요함수
	ckList() : 리스트에 주문건이 있는지 확인.
	ckListCompare() : 각각의 주문상태에 따라 비교할 주문상태 셋팅.
	ckListCompare2() : 리스트에서 선택한 주문건과 비교할 주문상태를 비교하고 허용되는 주문건(items)을 반환.
*/
var OApp=function(){
	this.f=document.Frm;
	this.arrState=[];
	this.c=[];
	this.items;
	this.cFlag;
	this.oFlag;
	this.msg;
};
OApp.prototype.init=function(){
	this.arrState=[];
	this.c=[];
	this.items='';
	this.cFlag=false;
	this.oFlag=false;
	this.msg='';
};
OApp.prototype.ck_search=function(){
	var f=document.sFrm;
	var sstate = "";
	if (f.sordstate) {
		for (var i=0, len=f.sordstate.length; i<len; i++) {
			if (f.sordstate[i].checked) sstate += ((sstate != "") ? "," : "") + f.sordstate[i].value;
		}
		f.sstate.value = sstate;
	}
	f.target = "_self";
	f.submit();
};
//listsize조절
OApp.prototype.ck_listsize=function(){
	this.f.target='_self';
	this.f.submit();
};
OApp.prototype.ck_cbListAll=function(){
	if (this.f.isCheckCbListAll.value!="T"){
		checkCbAll(this.f.cbList, true);
		this.f.cbListAll.checked = true;
		this.f.isCheckCbListAll.value = "T";
	} else {
		checkCbAll(this.f.cbList, false);
		this.f.cbListAll.checked = false;
		this.f.isCheckCbListAll.value = "F";
	}
};
//주문지연
OApp.prototype.ck_delay=function(mode){
	this.init();
	this.oFlag=this.ckList();
	this.ckListCompare(mode);
	this.oFlag=this.ckListCompare2();
	if (this.oFlag) {
		openPopup("about:blank", "Delay", 710, 650, "scrollbars=yes");
		this.oSubmit(this.items,mode,"Delay","pop_order_delay.asp");	
	};
};
//오류해결
OApp.prototype.ck_delayOk=function(){
	this.init();
	this.oFlag=this.ckList();
	this.ckListCompare('delivery_error');
	this.oFlag=this.ckListCompare2();
	if (this.oFlag && confirm("선택하신 주문건을 해결하겠습니까?")) {
		this.oSubmit(this.items,"DELIVERYOK","_self","pop_order_delayOk.asp");
	}
};
//배송중
OApp.prototype.ck_delivery=function(mode){
	this.init();
	this.oFlag=this.ckList();	
	if (mode =="WRITE")	{
		this.ckListCompare('delivery');
		this.oFlag=this.ckListCompare2();
	} else {
		this.ckListCompare();
		this.oFlag=this.ckListCompare2();
	}
	if (this.oFlag) {
		openPopup("about:blank", "Delivery", 710, 650, "scrollbars=yes");
		this.oSubmit(this.items,mode,"Delivery","pop_order_delivery.asp");	
	};
};
//발주확인
OApp.prototype.ck_balju=function(){
	this.init();
	this.oFlag=this.ckList();
	this.ckListCompare('CONFIRM');
	this.oFlag=this.ckListCompare2();
	if (this.oFlag && confirm("발주확인으로 수정하시겠습니까?"))	{
		this.oSubmit(this.items,"BALJU","_self","order_listOK.asp");
	}
};
//배송완료대기
OApp.prototype.ck_deliverywaiting=function(){
	this.init();
	this.oFlag=this.ckList();
	this.ckListCompare('deliverying');
	this.oFlag=this.ckListCompare2();
	if (this.oFlag && confirm("배송완료대기중으로 수정하시겠습니까?"))	{
		this.oSubmit(this.items,"DELIVERY_WAITING","_self","order_listOK.asp");
	}
};
//교환/환불신청
OApp.prototype.ck_claim=function(mode){
	this.init();
	this.oFlag=this.ckList();
	this.ckListCompare('claim');
	this.oFlag=this.ckListCompare2();
	if (this.oFlag) {
		openPopup("about:blank", "Claim", 710, 650, "scrollbars=yes");
		this.oSubmit(this.items,mode,"Claim","pop_order_claim.asp");	
	};
};
//로그확인
OApp.prototype.ck_log=function(infoUid){
	openPopup("pop_order_log.asp?infouid="+infoUid, "Detail", 710, 500, "scrollbars=1");
};
//주문취소철회
OApp.prototype.ck_cancel=function(){
	this.init();
	this.oFlag=this.ckList();
	this.ckListCompare('cancel');
	this.oFlag=this.ckListCompare2();
	if (this.oFlag && confirm("주문취소신청철회를 하시겠습니까?")) {
		this.oSubmit(this.items,"CANCEL_BACK","_self","order_listOK.asp");
	}
};
//환불
OApp.prototype.ck_refund=function(mode){
	this.init();
	this.oFlag=this.ckList();
	this.ckListCompare('refund');
	this.oFlag=this.ckListCompare2();
	if (mode == "REFUNDOK")	{
		msg="환불승인하여 환불완료로 상태변경됩니다.";
	} else {
		msg="환불거부하여 배송완료대기중으로 상태변경됩니다.";
	}
	if (this.oFlag && confirm(msg)) {
		this.oSubmit(this.items,mode,"_self","order_listOk.asp");
	}
};
//교환
OApp.prototype.ck_change=function(mode){
	this.init();
	this.oFlag=this.ckList();
	this.ckListCompare('change');
	this.oFlag=this.ckListCompare2();
	if (!this.oFlag) {return false;};
	if (mode == "CHANGEOK")	{
		openPopup("pop_order_claim.asp?mode="+mode+"&infoUid="+items, "Detail", 710, 650, "scrollbars=1");
	} else {
		if (confirm("교환거부하여 배송완료로 상태변경됩니다.")) {
			this.oSubmit(this.items,mode,"_self","order_listOk.asp");
		}
	}
};
//엑셀다운
OApp.prototype.ck_excel=function(){
	this.init();
	this.oFlag=this.ckList();
	this.ckListCompare('excel');
	this.oFlag=this.ckListCompare2();
	if (!this.oFlag) {return false;};
	if (confirm("선택된 주문건만 엑셀다운됩니다. 엑셀다운을 하시겠습니까?")) {
		var ef = document.eFrm;
		ef.excel_Uid.value = this.items;
		ef.action = "order_list_excel3.asp";
		ef.target = "_blank";
		ef.submit();
	}
};
//옵션변경
OApp.prototype.ck_option=function(infoUid){
	openPopup("pop_option_change.asp?infoUid="+infoUid, "Detail", 450, 550, "scrollbars=1");
};
//상세보기
OApp.prototype.ck_detail=function(uid){
	openPopup("/account/Account.Popup.asp?uid="+uid, "Detail", 1000, 450, "scrollbars=1");
};
//submit pop
OApp.prototype.oSubmit=function(items,mode,target,action){
	this.f.infoUid.value = items;
	this.f.mode.value = mode;
	this.f.target = target;
	this.f.action = action;
	this.f.submit();
};
OApp.prototype.ckList=function(){
	if (parseInt(this.f.listLen.value,10) === 0) {
		alert('조회된 주문건이 없습니다.');
		return false;
	}else{return true;}
};
OApp.prototype.ckListCompare=function(mode){
	switch (mode) {
		case "delivery"||"CONFIRM": 
			this.c.push("201"); 
			this.msg='[발주확인]상태의 주문이 없습니다.';
			break;
		case "BALJU": 
			this.c.push("200"); 
			this.msg='[배송준비]상태의 주문이 없습니다.';
			break;
		case "cancel": 
			this.c=["200","201"]; 
			this.msg='[발주확인]나 [배송준비]상태의 주문이 없습니다.';
			break;
		case "deliverying"||"delivery_error": 
			this.c.push("301"); 
			this.msg='[배송중]상태의 주문이 없습니다.';
			break;
		case "refund": 
			this.c.push("501"); 
			this.msg='[환불신청]상태의 주문이 없습니다.';
			break;
		case "change": 
			this.c.push("601"); 
			this.msg='[교환신청]상태의 주문이 없습니다.';
			break;
		case "cancel": 
			this.c.push("421"); 
			this.msg='[주문취소신청(입금확인)]상태의 주문이 없습니다.';
			break;
		case "claim": 
			this.c=["302","304","501","601","504","602"]; 
			this.msg='[배송완료],[배송완료대기],[환불신청],[교환신청],[환불완료],[교환완료]상태의 주문이 없습니다.';
			break;
		default:
			this.msg='선택하신 주문건이 없습니다.';
			// return false;
	}
};
OApp.prototype.ckListCompare2=function(){
	if (typeof(this.f.cbList.length) == "undefined") {	
		if (this.f.cbList.checked ) {
			cFlag=false;
			if (this.c.length!=0) {
				for (var i=0; i<this.c.length; i++) {
					if (this.f.infoAllState.value == this.c[i]) {
						cFlag=true;
					}
				}
			}else{cFlag=true};
			if (cFlag) {
				this.items = this.f.cbList.value;
				this.arrState[this.arrState.length] = this.f.infoAllState.value;
			}
		} else {
			alert('선택하신 주문건이 없습니다.');
			return false;
		}
	} else {
		for (var i=0; i<this.f.cbList.length; i++) {
			if (this.f.cbList[i].checked ) {
				cFlag=false;
				if (this.c.length!=0) {
					for (var x=0; x<this.c.length; x++) {
						if (this.f.infoAllState[i].value == this.c[x]) {
							cFlag=true;
						}
					}	
				}else{cFlag=true};
				if (cFlag) {
					this.items += ((this.items) ? "," : "")+this.f.cbList[i].value;
					this.arrState[this.arrState.length] = this.f.infoAllState[i].value;
				}
			}
		}
	}
	if (this.items == "") {
		alert(this.msg);
		return false;
	}else{return true;}
};
var oApps=new OApp();