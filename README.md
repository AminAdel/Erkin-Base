# Erkin-Base version 2.0.0
Web frontend practical style classes. Useful near bootstrap and other UI frameworks.

version 2 is complete rewrite of the project and is not compatible with older versions.


---

## quick setup
just include "Erkin-Base.min.css" file from dist folder into your web project, then you are ready to go.

---

## display :
```html
<div class="ds_i">display: inline</div>
<div class="ds_b">display: block</div>
<div class="ds_ib">display: inline-block</div>
<div class="ds_f">display: flex</div>
<div class="ds_if">display: inline-flex</div>
<div class="ds_n">display: none</div>
<div class="ds_it">display: inline-table</div>
<div class="ds_t">display: table</div>
<div class="ds_tr">display: table-row</div>
<div class="ds_tc">display: table-cell</div>
<div class="ds_li">display: list-item</div>
```

---

## position :
```html
<div class="po_s">position: static</div>
<div class="po_r">position: relative</div>
<div class="po_a">position: absolute</div>
<div class="po_f">position: fixed</div>
<div class="fixed">position: fixed</div>
```

---

## float :
```html
<div class="fl_r">float: right</div>
<div class="fl_l">float: left</div>
<div class="fl_n">float: none</div>
```

---

## overflow :
```html
<div class="ovf_a">overflow: auto</div>
```

---

## font-size classes for "px" unit :
we have every font-size from 6px to 20px
```html
<div class="fz_6">font-size is 6px</div>
<div class="fz_7">font-size is 7px</div>
<div class="fz_8">font-size is 8px</div>
...
<div class="fz_20">font-size is 20px</div>
```
for font-sizes bigger than 20 pixel we have classes in even-numbers only :
```html
<div class="fz_22">font-size is 22px</div>
<div class="fz_24">font-size is 24px</div>
<div class="fz_26">font-size is 26px</div>
...
<div class="fz_100">font-size is 100px</div>
```

---

## font-size classes for "pt" unit :
we have every font-size from 6pt to 30pt
```html
<div class="fz_6pt">font-size is 6pt</div>
<div class="fz_7pt">font-size is 7pt</div>
<div class="fz_8pt">font-size is 8pt</div>
...
<div class="fz_30pt">font-size is 30pt</div>
```

---

## font-styles :
to make italic text :
```html
<div class="i">italic text</div>
<div class="italic">italic text</div>
<div class="fs_i">italic text</div>
```

to make bold text :
```html
<div class="b">bold text</div>
<div class="bold">bold text</div>
<div class="fs_b">bold text</div>
```

to make normal text :
```html
<div class="n">normal text</div>
<div class="normal">normal text</div>
<div class="fs_n">normal text</div>
```

---

## font-weight :
```html
<div class="fw_100">font-weight is 100</div>
<div class="fw_200">font-weight is 200</div>
<div class="fw_300">font-weight is 300</div>
<div class="fw_400">font-weight is 400</div>
<div class="fw_500">font-weight is 500</div>
<div class="fw_600">font-weight is 600</div>
<div class="fw_700">font-weight is 700</div>
<div class="fw_800">font-weight is 800</div>
<div class="fw_900">font-weight is 900</div>
<div class="fw_n">font-weight is normal</div>
<div class="fw_b">font-weight is bold</div>
<div class="fw_br">font-weight is bolder</div>
<div class="fw_lr">font-weight is lighter</div>
```

---

## direction :
```html
<div class="ltr">left to right direction</div>
<div class="rtl">right to left direction</div>
```

---

## text-align :
```html
<div class="tx_r">text-align : right</div>
<div class="tx_l">text-align : left</div>
<div class="tx_c">text-align : center</div>
<div class="tx_j">text-align : justify</div>
```

---

## line height with no unit (default) :
this value can be a float number like 0.8 or 1.5

or can be an integer like 1 or 2

to apply these styles multiply it to 100 then use it like these examples :
```html
<div class="lh_50">line-height: 0.5</div>
<div class="lh_60">line-height: 0.6</div>
<div class="lh_70">line-height: 0.7</div>
...
<div class="lh_290">line-height: 2.9</div>
<div class="lh_300">line-height: 3</div>
```

## line height with "px" unit :
we have every number between 10 to 50 pixels :
```html
<div class="lh_10px">line-height: 10px</div>
<div class="lh_11px">line-height: 11px</div>
<div class="lh_12px">line-height: 12px</div>
...
<div class="lh_50px">line-height: 50px</div>
```

to apply styles bigger than 50 pixel we have 5-step sizes :
```html
<div class="lh_55px">line-height: 55px</div>
<div class="lh_60px">line-height: 60px</div>
<div class="lh_65px">line-height: 65px</div>
...
<div class="lh_100px">line-height: 100px</div>
```

---

## letter-spacing :
```html
<div class="letsp_n">letter-spacing: normal</div>
<div class="letsp_1">letter-spacing: 1px</div>
<div class="letsp_2">letter-spacing: 2px</div>
<div class="letsp_3">letter-spacing: 3px</div>
<div class="letsp_4">letter-spacing: 4px</div>
<div class="letsp_5">letter-spacing: 5px</div>
```

we also have alternative shorter class names :
```html
<div class="ls_n">letter-spacing: normal</div>
<div class="ls_1">letter-spacing: 1px</div>
<div class="ls_2">letter-spacing: 2px</div>
<div class="ls_3">letter-spacing: 3px</div>
<div class="ls_4">letter-spacing: 4px</div>
<div class="ls_5">letter-spacing: 5px</div>
```

---

## word-spacing :
```html
<div class="wordsp_n">word-spacing: normal</div>
<div class="wordsp_1">word-spacing: 1px</div>
<div class="wordsp_2">word-spacing: 2px</div>
<div class="wordsp_3">word-spacing: 3px</div>
<div class="wordsp_4">word-spacing: 4px</div>
<div class="wordsp_5">word-spacing: 5px</div>
```

we also have alternative shorter class names :
```html
<div class="ws_n">word-spacing: normal</div>
<div class="ws_1">word-spacing: 1px</div>
<div class="ws_2">word-spacing: 2px</div>
<div class="ws_3">word-spacing: 3px</div>
<div class="ws_4">word-spacing: 4px</div>
<div class="ws_5">word-spacing: 5px</div>
```

---



_...this document is not finished yet!_