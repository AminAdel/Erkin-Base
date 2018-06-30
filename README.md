# Erkin-Base version 2.0.0
Web frontend practical style classes. Useful near bootstrap and other UI frameworks.

version 2 is complete rewrite of the project and is not compatible with older versions.


---

### quick setup
just include "Erkin-Base.min.css" file from dist folder into your web project, then you are ready to go.

---

# Layout :

### display :
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

### position :
```html
<div class="po_s">position: static</div>
<div class="po_r">position: relative</div>
<div class="po_a">position: absolute</div>
<div class="po_f">position: fixed</div>
<div class="fixed">position: fixed</div>
```

---

### float :
```html
<div class="fl_r">float: right</div>
<div class="fl_l">float: left</div>
<div class="fl_n">float: none</div>
```

---

### overflow :
```html
<div class="ovf_a">overflow: auto</div>
<div class="ovf_v">overflow: visible</div>
<div class="ovf_h">overflow: hidden</div>
<div class="ovf_s">overflow: scroll</div>

<div class="ovfx_a">overflow-x: auto</div>
<div class="ovfx_v">overflow-x: visible</div>
<div class="ovfx_h">overflow-x: hidden</div>
<div class="ovfx_s">overflow-x: scroll</div>

<div class="ovfy_a">overflow-y: auto</div>
<div class="ovfy_v">overflow-y: visible</div>
<div class="ovfy_h">overflow-y: hidden</div>
<div class="ovfy_s">overflow-y: scroll</div>
```

---

### z-index :
we have every z-index from -10 ~ 15
```html
<div class="z_-10">z-index: -10</div>
<div class="z_-9">z-index: -9</div>
...
<div class="z_-1">z-index: -1</div>
<div class="z_0">z-index: 0</div>
<div class="z_1">z-index: 1</div>
...
<div class="z_15">z-index: 15</div>
```

---

# Distances :

### top :
from -100px ~ -50px : (10px steps)
```html
<div class="t_-100">top: -100px</div>
<div class="t_-90">top: -90px</div>
<div class="t_-80">top: -80px</div>
...
<div class="t_-50">top: -50px</div>
```

from -50px ~ -10px : (5px steps)
```html
<div class="t_-50">top: -50px</div>
<div class="t_-45">top: -45px</div>
<div class="t_-40">top: -40px</div>
...
<div class="t_-10">top: -10px</div>
```

from -10px ~ 10px : (1px steps)
```html
<div class="t_-10">top: -10px</div>
<div class="t_-9">top: -9px</div>
<div class="t_-8">top: -8px</div>
...
<div class="t_9">top: 9px</div>
<div class="t_10">top: 10px</div>
```

from 10px ~ 50px : (5px steps)
```html
<div class="t_10">top: 10px</div>
<div class="t_15">top: 15px</div>
<div class="t_20">top: 20px</div>
...
<div class="t_50">top: 50px</div>
```

from 50px ~ 100px : (10px steps)
```html
<div class="t_50">top: 50px</div>
<div class="t_60">top: 60px</div>
<div class="t_70">top: 70px</div>
...
<div class="t_100">top: 100px</div>
```

from 100px ~ 500px : (50px steps)
```html
<div class="t_100">top: 100px</div>
<div class="t_150">top: 150px</div>
<div class="t_200">top: 200px</div>
...
<div class="t_500">top: 500px</div>
```

### right, bottom, left :
they are exactly like `"top"` classes, except that you need to replace `"t_"` with :

`"r_"` for `"right"` positioning,

`"b_"` for `"bottom"` positioning,

`"l_"` for `"left"` positioning,

example :
```html
<div class="r_100">right: 100px</div>
<div class="b_100">bottom: 100px</div>
<div class="l_100">left: 100px</div>
```

---

# Margin :
set margin auto to sides :
```html
<div class="mg_a">margin-right: auto; margin-left: auto</div>
```

### margin-top :
we have classes for margins between -100px to 100px.

from -100px to -10px in 5px steps.
```html
<div class="mgt_-100">margin-top: -100px</div>
<div class="mgt_-95">margin-top: -95px</div>
<div class="mgt_-90">margin-top: -90px</div>
...
<div class="mgt_-10">margin-top: -10px</div>
```

from -10px to 10px all pixels exist.
```html
<div class="mgt_-10">margin-top: -10px</div>
<div class="mgt_-9">margin-top: -9px</div>
<div class="mgt_-8">margin-top: -8px</div>
...
<div class="mgt_9">margin-top: 9px</div>
<div class="mgt_10">margin-top: 10px</div>
```

from 10px to 100px in 5px steps.
```html
<div class="mgt_10">margin-top: 10px</div>
<div class="mgt_15">margin-top: 15px</div>
<div class="mgt_20">margin-top: 20px</div>
...
<div class="mgt_100">margin-top: 100px</div>
```

### margin-right, margin-bottom, margin-left :
they are exactly like `"margin-top"` classes, except that you need to replace `"mgt_"` with :

`"mgr_"` for `"margin-right"` positioning,

`"mgb_"` for `"margin-bottom"` positioning,

`"mgl_"` for `"margin-left"` positioning,

example :
```html
<div class="mgr_100">margin-right: 100px</div>
<div class="mgb_100">margin-bottom: 100px</div>
<div class="mgl_100">margin-left: 100px</div>
```

---

# Width :

width auto :
```html
<div class="w_a">width: auto</div>
```

width 100% :
```html
<div class="w_full">width: 100%</div>
```

### width with px unit :

from 0 to 50px every size :
```html
<div class="w_0">width: 0</div>
<div class="w_1">width: 1px</div>
<div class="w_2">width: 2px</div>
...
<div class="w_50">width: 50px</div>
```

from 50px to 100px in 5px steps :
```html
<div class="w_50">width: 50px</div>
<div class="w_55">width: 55px</div>
<div class="w_60">width: 60px</div>
...
<div class="w_100">width: 100px</div>
```

from 100px to 1000px in 50px steps :
```html
<div class="w_100">width: 100px</div>
<div class="w_150">width: 150px</div>
<div class="w_200">width: 200px</div>
...
<div class="w_1000">width: 1000px</div>
```

### min-width with px unit :

from 5px to 50px in 5px steps :
```html
<div class="mw_5">min-width: 5px</div>
<div class="mw_10">min-width: 10px</div>
<div class="mw_15">min-width: 15px</div>
...
<div class="mw_50">min-width: 50px</div>
```

from 50px to 100px in 10px steps :
```html
<div class="mw_50">min-width: 50px</div>
<div class="mw_60">min-width: 60px</div>
<div class="mw_70">min-width: 70px</div>
...
<div class="mw_100">min-width: 100px</div>
```

from 100px to 1000px in 50px steps :
```html
<div class="mw_100">min-width: 100px</div>
<div class="mw_150">min-width: 150px</div>
<div class="mw_200">min-width: 200px</div>
...
<div class="mw_1000">min-width: 1000px</div>
```

---

# Text & Font :

### font-size classes for "px" unit :
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

### font-size classes for "pt" unit :
we have every font-size from 6pt to 30pt
```html
<div class="fz_6pt">font-size is 6pt</div>
<div class="fz_7pt">font-size is 7pt</div>
<div class="fz_8pt">font-size is 8pt</div>
...
<div class="fz_30pt">font-size is 30pt</div>
```

---

### font-styles :
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

### font-weight :
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

### direction :
```html
<div class="ltr">left to right direction</div>
<div class="rtl">right to left direction</div>
```

---

### text-align :
```html
<div class="tx_r">text-align : right</div>
<div class="tx_l">text-align : left</div>
<div class="tx_c">text-align : center</div>
<div class="tx_j">text-align : justify</div>
```

---

### line height with no unit (default) :
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

### line height with "px" unit :
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

### letter-spacing :
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

### word-spacing :
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

### mouse cursor :
```html
<div class="cursor_auto">cursor: auto</div>
<div class="cursor_pointer">cursor: pointer</div>
<div class="cursor_default">cursor: default</div>
<div class="cursor_none">cursor: none</div>
<div class="cursor_text">cursor: text</div>
<div class="cursor_wait">cursor: wait</div>
<div class="cursor_progress">cursor: progress</div>
```

we also have alternative shorter class names :
```html
<div class="curs_a">cursor: auto</div>
<div class="curs_po">cursor: pointer</div>
<div class="curs_de">cursor: default</div>
<div class="curs_n">cursor: none</div>
<div class="curs_t">cursor: text</div>
<div class="curs_w">cursor: wait</div>
<div class="curs_pg">cursor: progress</div>
```

---

### vertical-align :
```html
<div class="va_t">vertical-align: top</div>
<div class="va_m">vertical-align: middle</div>
<div class="va_b">vertical-align: bottom</div>
<div class="va_bl">vertical-align: baseline</div>
<div class="va_sb">vertical-align: sub</div>
<div class="va_sp">vertical-align: super</div>
<div class="va_tt">vertical-align: text-top</div>
<div class="va_tb">vertical-align: text-bottom</div>
```

---




_...this document is not finished yet!_