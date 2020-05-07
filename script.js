/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

// prints "hi" in the browser's dev tools console
console.log("hi");

/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

// prints "hi" in the browser's dev tools console
console.log("hi");

var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  setTimeout(showSlides, 6000); // Change image every 2 seconds
}

$(document).on("scroll", function() {
  if ($(document).scrollTop() > 200) {
    $("header").addClass("shrink");
  } else {
    $("header").removeClass("shrink");
  }
});

/*appearing text*/
(function() {
  var aboutEl = $("div.about"),
    aboutElOffset = aboutEl.offset().top / 2,
    documentEl = $(document);

  documentEl.on("scroll", function() {
    if (documentEl.scrollTop() > aboutElOffset && aboutEl.hasClass("hidden"))
      aboutEl.removeClass("hidden");
  });
})();


function pictureChange0() {
  document.getElementById("theImage").src =
    "https://lh3.googleusercontent.com/qWVMJrg9KLDjz6t5nzSdTwx7vagweM6pUi2E37soBht4cb5Q4e-ewhoVvjWT261C2SB-eU815znwM4MlV20SKFyRhgaeqtw-gPjsk1k5RD-Pv1DD57DetVXADDIgid0JMaIhxwCIFA=w2400";
}

function pictureChange1() {
  document.getElementById("theImage").src =
    "https://lh3.googleusercontent.com/NLtG7POqD3YhsXvQOSnQ0OXYRTH4QOtBERhiL9vCuTukWLILNYeFbGevfre4i22VlTM-UMyfYCxa2nAy818HPkNS6w8TuOm2OT8MvmHsPXQtZClJgnexN8yZqW2tfVqQ7W6ksHBP6Q=w2400";
}

function pictureChange2() {
  document.getElementById("theImage").src =
    "https://lh3.googleusercontent.com/bgcLU70bJDjnNvp47uh57VLvIBsBpe9-GzRM5e0TAji-a6W_Wco6sFvPVNgcaNJn1lFGl6Xx1GDEjx_TYZDJAo5rf-g20GtnEgYWtyj07TALOB2na65Ai-JPyWhZut_lBSW4ISdlMQ=w2400";
}

function pictureChange3() {
  document.getElementById("theImage").src =
    "https://lh3.googleusercontent.com/vO-QY2gjqpTl9p0z6BWYeVHprCgic1XeNPqPfKNPpTllnN9VLtnISDRATbPJ4SX3hhYZ3fJtp3Sg-bVoFx9I7YEteYMdhVt56Ue7P3C7KgdjEyAJLIzCfCghx3_BqqYC_qN6mMpMgw=w2400";
}

function pictureChange4() {
  document.getElementById("theImage").src =
    "https://lh3.googleusercontent.com/0k6f3hxnY4s0ybSrHC_zUbg-pweAZz9wisxMnheUMmqw-mz5yENkf8sVVh3r0U_HeXL3vMavLR136CbE3U16ginZRUWBASwU-uSKoBRE98PYJ6dPE24oX8wi8j5XQkWEIobD6i4nHA=w2400";
}

function pictureChange5() {
  document.getElementById("theImage").src =
    "https://lh3.googleusercontent.com/ijPqEUVoveDjc8n0zqRXRF6dGoMj-BBdyC7AJ-Nt-2kQ7Q_ZhSV0iHETxTzlbKS2MoyzOxX97s6IrsUKjQ0DFPVxw507ucLljQ09edqxC2YE8SlHZIraPqw_UAcizvFp70phm1t9Eg=w2400";
}

function pictureChange6() {
  document.getElementById("theImage").src =
    "https://lh3.googleusercontent.com/PBhtevurtWTIPf54aikOyQuF9zYmFUWglN8s9sA9NoRdvXk3Yjkn4kcFmROyTkuU36YQD2Mg_McRjfk49dg50PIBwuSCDVCrZHzF53iydUPmrWQ6iAU490uPgCnapg0T8cP6lTJ_6g=w2400";
}

function pictureChange7() {
  document.getElementById("theImage").src =
    "https://lh3.googleusercontent.com/uH5XJF2pfX-TS9vLo9lj1iIaHpb2nj50rNkfEHs6Txdy_j1snm8kbUvAldIzWOB5vyqAmhLv0E0olKVacP81EHpxywABsIHkrRIRF-pzwLUwqHZf3OL68mwgfnhtEQ3gIdPwBnyiCw=w2400";
}

function pictureChange8() {
  document.getElementById("theImage").src =
    "https://lh3.googleusercontent.com/XaMQpV0uqtM9ozIvSFqKHD7Bw6imMSwfb06r7jtfb9kk86RrwE2_lciqVHF0LwMrWObVEK5DXIyv3c4C2y-YBBJSRXu9hs2Ay7chWHsEfTyoLMBlhr995yvfy8IjUrJTRp-LoDo-uw=w2400";
}

function pictureChange9() {
  document.getElementById("theImage").src =
    "https://lh3.googleusercontent.com/BeQ5aK0vmgPqyWStGo9zcfKhh_jsvxssJnPP6FCp4TPq8FDQhEbC3FeS3KQhdGMoANToOinT9XUfh_U7_d9CcnZPaS0KExt-BR11hnYxMTgKxVCfh05grg9Yi09HdO9BUHIhcp1GhA=w2400";
}

function pictureChange10() {
  document.getElementById("theImage2").src =
    "https://lh3.googleusercontent.com/2H6fz8tkWpH6f7Tq_3vteOISwKshDmy8PAqBIlJT2r793huzhAVJbZLwIgHoTHpV8NKPNXAkCEYgvdnZYu3-vqKIM3cCN3emqcd69p4Swr_0R0V-kGhqwA7Im1uPCy6d1UJSC-MDpOOdPighoBVPvXGs3poO3tY6qSN8jZD-1WmaqHWFvSIMkPEV3HAz9XqZOzADWSXsw1LGKl44gWl98XZEkI7Oa12q2qlEP56zhq04ZvY9BQ88on03t8OVVRhbgTWcC46vJA_DELarUQYrD9Hr6V7flM5uS_HwIUV9dRr7pbY5ph-JaikasdyTuWRwCojSM1aBeKHaMjtkg_rl2uWZTxfMap3fmAD-YRtrWYUKzhAZyN98KsHjazKrwiYhTmbMQ5-QfCAllYHyku1I0RoQjSou-bjX6bYmJx2HbEIwCEt9uantYwhNBl0PZdX-rNNBbZ2NK9pT05WT5HJ_D_T8I_UXXmaDBKo99FpK_195ekjNVK5IP2vbVPlLQzl4gbi9-wXhdVg-ly_Jv4JNVhRiNLdd5hAKcJdmURdQ5uYtISv04F5wv5nq8XXNmog0RbV_3Pf4byb1zEmimlIHoWxKgZASgGnX8XW3u5ObWR7NsZPGD4w5RzrM7bkEe9kLGZIDpEiKfsG6MramzGTPYOIgiOUbLHWfluF9PTHZcY1wz7KKztmghEHWXg=w1156-h1578-no";
}

function pictureChange11() {
  document.getElementById("theImage2").src =
"https://lh3.googleusercontent.com/Jr0ip7QjeKYluRyosUzMga3gdTrst8OEPSmownGXkUUTx64XjNtkCOIW0jeAeMdFLR7jSbhQJ0JSp2kG1V9RCafgyW82dtC1qhobDIemmQG_22w5kx1oudfH0umTYXpzEyhgRaeWoFyz2gUJpNorcP73o1CZnJzXyiXZ2zEq7Q3M2nbuDsaK2Dazlrs56c2f345oGWLboNvhKm9RgALbtMdzcpBDGvDYnZaLL1ke4lJcy3va0utVCKPex6a7bH8I27LE2c0053ogNEhqL1gIiAC-deJPp86eAA9RHOxD6k9P1_fHpDVxoSwWM9uTGOkpV9KPNj3JskOAeniAXqUGdW6d8wtbFMyLKBbUdFhuZxhM8PvRs3Q5pdyD9_GTp0QvCnzN6_buAv7D16PBN60qnRndaeR-QA5xoA3vnkivCROIw5Bcye6eVbeFDQrO6rlIjMcYcDXTg4lJUDBhpqGG3ZWpV8rDoWUQ2D3IXUPhtyOai74I0J5js8H43rZ5E3LWDbbCrDF529KZcBowNX7LvO_XLxoDb4pxk0b1WUArEy0u4f6480jgvIn9s9APpX2Cgh9u_WhqyxQImKxzOg2vpPYVN7F_8wscuMHhMq-p5Zy2VFiDJhH5UKoAZZ0ODkzJUAqvo0tiAj5nofyPsBZx8utiWhC0FNgtPScGI-BaC2C2brJyf7dw7jUcSA=w1156-h1578-no";
}

function pictureChange12() {
  document.getElementById("theImage2").src =
"https://lh3.googleusercontent.com/a1_M_iC7bgY7mNOwd2hk3mnygFs577otql-G3Rg4afIsaoPPjpF5aeQF_3SWDzLZUJzyK2ghvyK7JiuZTaDGvce6GoWVQx-0wrCaqNH2xDrj-0JdQcwWKomw37F2cHoXs_D3O6ZkTd-tEjX12sLJFgW9QXjJskNqnNQ8eRiDo6tONqd7sXS8Hqm2Q1mOv459wFiDjNse1IzlKpg-piVOv4EGwjW-eouo5d563MIPb7t72Pgf6rVO43mx66bOsCyY4-OAcEFoarlVGvIEjWlmORwnHQAZIK-fJ6EWTIRWhALuLHjqrANPmNRl6NxrlE0hv6xCDcpUpGRTVyHIheekHuPrwxrx-4g2ReXiwfVvsvD2sLnwSaI-Yzovq24B_gzdo1T-PtFCplHIxpY5RC-6DCHMkWtzgNxyO7gtFpQP0BWlGBS2sbdSGVj2cTkdmqfqkL01uXcSLJtuN1P_PchKYnanKqb_c6l88f1bgP0R8-Ezw9kgkmRYmdszR11OhNLSRsZchDI0wOTMXo5swwdya8qMlicEwtsN7isOH6zOYEBmV7fR7wg6r2Jx4X0Ep6TDRVTkERL6Kit2ey9oIGfl5sG1hiwtRHTAuPLMVSeEmxeWaDye07domgszVxJ_yvA1s2EepwA9qWvWkTjg-M8-gPuAzQn7yhk_M48KiffGNHumL3sBo0EPHpVpWg=w1156-h1578-no";
}

function pictureChange13() {
  document.getElementById("theImage2").src =
"https://lh3.googleusercontent.com/PidtX9MBZO8m3lka3sikQ3OiOFNVGeNA2NpIXCAhpkJmzyavDvn2yS67yZjtRbIA2d_dElrOQPA04BON_TWzJtppGi_rA3LdlVMOZKTfmwfNK7Xtp27P3wDw_DMlyFWJ8x60w7jEJ2IW22btC6KB1i_cCC4vPUovsoLQQL2w2ZFly4kM0DvmaMI6ALUCcsybv-l7m09AlXYaVZg-zA5fR4PcaTor29dnFwx_9yvYIyv_gVbL185m68WbIyovFYaK0NkXnl6B_1Oh3duXKTThOwN4o_hWQJYG2H7dMS6jBy7yrqbLjh55euC3AnU0HNtRhgdm49eg735ybvNCl6xyjJi8YHhfuqP8NkjO9CT3ni5OkCrNWOZplAj8weX6J-x_B4it2J9fWs0HcQvOqzYybetfv-9eVisdqnA1tUj6djsP5VmJTFLdXIpz_KMoE1DHskofOi2tn9DtA0N2hXwP49kP27S7i-3S1l-hiATxHaqigJH6CwDpunjO4ubOBRrInrI-9_wKXOAgaYFTpKNM7o8R5dtd8dKhRlsrNOi7eqaZePhiS03aQGFXdHZ6su2oExDJWfCJtriDafXJNc7Dv1mEG--ieLVNiE8gQUNhSeYC7_DWLiV6rEGNsyOJcJn5G2RLEJZBKeo1tO3QmRgwIQ1MyDiq1abwGuNKzuBTRwS9U96WP9jBsK-_YQ=w1156-h1578-no";
}

function pictureChange14() {
  document.getElementById("theImage2").src =
"https://lh3.googleusercontent.com/pmfD6UxQd4HEplRfk9sc9ZCtfk5qYxhXXDhEVVnFtWPhIaS3hP4qoagri8ne2m-c9QZXsrfMR9FG4vpaj9RR74MWm9QTmkp3WwNpxiAxvh2JE44Z-8wbtpKSs8rJ2o_TdKy9Y0No5ofVbQYH23H1yoaC5eoo4D6Ux15WOWlLHeeStPMuwG29xDhHlrpblwpIksnPZ1h5mrIWpUn4D4Of9ZMv1EpAnjuglNWnWrnTEWha2M4-dxFK244ECvM3ExLqkhQXJfLRmvtewPeqitrIvAkGp5f4tHuvv8Lf-rhoDzCbBZ3VNuHsbdvRqcEj0fUhX7qouLWqLJfpGx7z65vZqYDOduSIxnaXWoV30V3idAfHE4K-bW3JDsLe_5ni9JbWwjAmp-MDlIxlfZwzHXZbqOfsIsiyHMzQMGhk1R468x-jBsD1_SWcvFoOqggJ7mAhrFlFjrGkY-NMWXovxX-00MldB-DC_us18N_sg8A_c3-KgmHDBKuPorn3sGMHiT41n6LnMDCFq7xZ0rOGi1KDyk3WhcC--OTx9ljFATzxBz0u2WAtm54MzzPxox6ppu7bQRrskwAC6A5h307RIdpc8-6hXxu-hNlp85v0_lxFVcIy9L7OprgfiV0SX7lW3DwKebhIBjsxpA646ticDWyqdblgtFZtx8n1tCiSgheTzk6M-bPNLj_a9AThMA=w1156-h1578-no"
}

function pictureChange15() {
  document.getElementById("theImage2").src =
"https://lh3.googleusercontent.com/AcykoovHZI1jjj_jNUZVI6QzTxHHckqpIKrhM-opBb73tuxEm0k_mPn40AdjFVdCxQ_QJvE6M9Chl43X8hQePAtIRslKw39QnxME68osIcDFVo7xJdxmjGLkgoAnX7n4SHqQf3WVEGTOLjm-MJwgmVaQE6VDit0R6QaV9kpE9EN9ThfD6cIKP9pZ-blxXCDoSAnzwlErUgfFJJfQ5d542_GWCi4g-jJFW1ZA3amAJgjrTYvlT_xHBKq5OLMeq6BCc_it8mdElwVconYqih5NXTqz-F8Yk-Q4hXiBiYFOHvGH0hPoHYWtul0Wsvm9mBfalkx8qw5OGMNShKiIylNwx1NDUQro3s2TipSkQ8xPlopjqlVJTM5FCDeL8Cr3hYOnuu6nlxv89Xdzu94bUCrt5KUilxnv3F2Iq-soN-up1x_sdbGa_9gUbTTinNCtTb28F8DywvrrIAGTGlUygzxL4AnC5FSrj0cv-yP3lmBZh3UP0z1ZaazQwzKkkrzu6Xj-wftluVe-JbWgHbzdY8hTHgFLaJTjIvj0DjdicD5UGNxohyZXIZ9i29S52K6r-Ko5O-N-ldYcdFxXbsRvs74X0e-ilnbb4Me60Hy8eoydcrzdQ9ShVChmPM6iVjJf7_VXXJ09iyeOyqepyKMiUQQ7fqw4u9TurOj9w3j1JowL6qkqEPPSzG4wWKL0PA=w1156-h1578-no";
}

function pictureChange16() {
  document.getElementById("theImage2").src =
"https://lh3.googleusercontent.com/5lc1m1W_WAVb7nP9frxTT-z1U4voHTwSwgjNDVUO5Ks5O1FN_6mXZVDH_f45Zz8NudOEty5WY4fCDgVm2NMI5YRhwJF-dg232ZQNaplN2vyv67QkTtygYKpBXCo0DpZyJDfDK7jqHkkXhjwynMqyTjGttLa2C4e1yyX2gV1TIWHOUocdD8HnGDX9DgRp_hFpwZejBBFpNgtF5XzlDlaanMBFEq_ZRpCkFOYWUbFScr-Btr5W7QSGUSv0TUyVL57t7NdtBJgiB1X1GysOvulyGVuUXWt9pUpy5iYI0Ctw0pCPLJaDUs5tn7zaLIy1qAXgHvHU_iVGXRWT-O-Yt-YFcabtbk9XxfN5ROGAvhr4HIS2m_q5GcU9JGhyNRJOnr2oKSxxIxZD46WoYAUZXmM7NsUn-W_YanNT91W_EcjhuDmdRx9IW6UTEVkBpaRRUVrMH6pxgx33tbo0wN1ThpkdGBXu9Affk3CAVqIwq8aSYAY_9rTqhCQUtonMddMmnCgBFyea8UBjr71VteF3x5H_qlgvqLVK0LffeAJZIBGh4hQJuYr8IUvGMFO41pOXQS52ZhNi9X_lCKoEozq0Pcc8P7q3c8t7oIFOeVpVOOw1d-taCeitjm9QPdbi5FaOks3SNqMYg7guEx7DXn9Dh57j88b6RwP_iwmGYwKuhRb9NXMw2Yc6ikaXxg5rug=w1156-h1578-no";
  }

function pictureChange17() {
  document.getElementById("theImage2").src =
"https://lh3.googleusercontent.com/hNpPP5TxvUasx142QO9StqVE-xZz5Tem4wqvJOJQScyLY6x2vL0qhWE4PfZbk5hmi3eOC2kyh6m1B5emUn2UIzvLDNnP75NtqgCJU8rf2Lu4tOS691tRXs6CXHyUiUR4XZ5UXUQMlhWRsplMclRddyqIrzULStQ55qinNfi71i3-2aRYRKwF55AlDpTZsej-gX8dUwCNxOPgqTDu7su9enN3PEnk_fnCfnWEaQ7ulSnOOFuwu95q5Fo0wVjIDrkknacGDogj159B-ZNXGsK54JPsYsJ__RDh_AIx-sbIrnAjOuMXnoAjTpb6aDMhrLIfZIBuM88YzslSny2Fl6IBFkgxnXCqmc45o5XM_IbT8RbxDpLPsERglhj0Uv0yy6P07rhy4Qo6AZyOMq8UB4it84ABCZpkg2nEXhuW8xh5erlj-qE67iXvz245Pk74AGFyynQXhbxrtU_FG2XstR9NlK4fBfKtHNDEbIX_SAwejB8kRZc4sOGAjrvyFYXmkxKB-7xZ4diueRYgJf4GlpRYCVWaMSwVrV_Vv_wCIcxhgHY4Fmq_SMmgSlseOPHy97-4Bdxtubfuv96-ul26qBNR-oY3AwObkXhic0QbwIsn7V4nq-t6esIBL7oydwIgP4Zm0mUcB0_1WZFuw013jnn0Iif8Tlo_HFe7oLqZ7bK00Lfb5131xmIqLYZHoQ=w1156-h1578-no";
}

function pictureChange18() {
  document.getElementById("theImage2").src =
"https://lh3.googleusercontent.com/mq5CRCzQG4QjRbDKMbSCb2IWM_QoNUeepCsobK-DQOlxt-U0iu1Rw5XvpHbhUIF9xCpz0ckrPElU0y3L0Xx238ZTG8Zo8X53uSLgcPlpwZq5QbSbI-8g2ii8leR6u6sSQyc2ksJkyP0DY0QQ9iS0qTWUK0iV8AkxHHa19H2fEFH-Je26l4_9qRAybiLKPxNjxwL_Dw_loQeXyp7faIxBLTI-PfVJ5a9mPfbpvZdcQISz2APM3E4tgus4xEEoU0yqzORvWT_NJ9iNC_xSob7PulNLv3AHezvoJB9gWdqu7B5LKO_DPjK0j-uHlMTUVy9-PXF-4tWQey4Pd4f15GbGCZHZpu1n23cubLo8bpnYTyKRApD1c5jnW9pTYpLjXxNxe9g1-4dKGj3C0A9uNqhbpATNT97XF_FQOZzocHOeRTKIH2FqgJ-_JY9IjXaSIRtswJjrgpEvVWBFaClzds7qUdVvyO3dTeqAuVoX_hXhGywyCAVtQ2VkFx0sRXrxh42NXICn1gzUK2g8NfGMyqMh3m9HXkkOcAG-swtluKgCI78y2Rr4oTDE7wm4V4a1197_PENzWSnlZeYvRKxUNGmAoMu3nQnrzQN6uoDFMiVv-LtsR3Ho3EDXPe_JcXBMCvhW4_KxW6RWX87sOyvC9e-I5K-MYR5_EQyrqcNiKKSepOAHIFJo-4O1By9tjw=w1156-h1578-no";
}

function pictureChange19() {
  document.getElementById("theImage2").src =
"https://lh3.googleusercontent.com/RoitJuvDAfVwrDS4pIJNMy8qTmHuSjfeWYhkTvdU2ioXgAOG9EUlgkQc2bbNE1pJiIqRv20yilW4SEfmZrGY_Cfr2yjz4PwGRa4gbSvJ0SfAVbZmh5pLRziGGx1JRdVxEQzvk7soLeJMcl3yBHMAz5O_rAOQEwoTR_PcjU4HuN9Yj3x40anUAMhYaqccXI0lbXD1s40-ibIQ_85qHVfuIFZNKFCLgym7jc643VpAlOONFUWLsNPstVc_oJE2Wr6ITyieQausDt1O4UcCc9bCMmg16gd7xhxS253GjR6JqgjDWyCT18LuO3m4FjBNRlrAxbfiKOOYHe7dBa9Gorh08ZqmKMXS6uTCYMvzn2F8M2CMtDTXch7XG3x-SsS7tqSX7u8gQyg1lkdTE_izTnmTTht5kOy91u8rYZYc10o2-WAyt1MivyYRuBICqL0kglp8xd5JQjv1sXrLtg1YBNxzxAtHvdRqVQw7sLXxTwVlFmzA28pUnD9VFXU8_f6R4f2c1KnW1VajZH3Ha7psCUi97Pw4ml20CO4FW48sagfP0ueaOUmuZNLYrHbCYMuGp8hENsX6Uu8XrkAQvEKgQmaJdBT4zmf49XpiYKb1tCaUiOCHJRcPledsMALL1g9AFxbzn-S-1p9y5s6q3OdHZZTZ9CdkGRx3DKR9IhQfSaD2PDbZGMYjbfai1bg_XQ=w1156-h1578-no";
}
