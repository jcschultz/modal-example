({
    handleBtnClick : function(cmp, event, helper) {
        cmp.find('overlayLib').showCustomModal({
            header : cmp.get('v.myModalHeader'),
            body : cmp.get('v.myModalBody'),
            footer : cmp.get('v.myModalFooter'),
            showCloseButton: true
        }).then(function(overlayInstance){
            cmp.set('v.myModalInstance', overlayInstance);
        });
    },
    
    handleModalCloseClick : function(cmp, event, helper) {
        cmp.get('v.myModalInstance').close();
    },
    
    handleModalSaveClick : function(cmp, event, helper) {
        alert('Save clicked');
        cmp.get('v.myModalInstance').close();
    },
    
});