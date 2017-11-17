<template lang="html">
  <div class="bg">
    <div class="bgTop">
      <img src="../../static/shezhiback.png" @click="shezhiback()" alt="">
      <span>开源许可</span>
    </div>
    <main>
      <h3>Acknowledgements</h3>
      <p>This application makes use of the following third party
      libraries:</p>
      <h3>AFNetworki ng</h3>
      <p>Copyright(c)<span>2011-2016</span>AlamofireSoftwareFoundation(http://alamofire.org/ )</p>
      <p>Permission is hereby granted,free of charge,to any personobtaining a copy of this software and associated documentation files (the“Software"),to deal in the Software without restriction,including without limitation the rights to use,copy,modify,merge,publish,distribute,sublicense, and/or sell copies of the Software,and to permit persons to whom the Software is furnished to do so,subject to the following conditions:</p>
      <p>The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.</p>
      <p>THE SOFTWARE IS PROVIDED“AS IS",WITHOUT WARRANTY OF ANY KIND,EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAlM,DAMAGES OR OTHER LIABILITY,WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE,ARISING FROM,OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.</p>
      <h3>AKPickerView</h3>
      <p>The MIT License (MIT) Copyright (c) 2014 Akio Yasui Permission is hereby granted,free of charge,to any person obtaining a copy of this software and associated documentation files (the“Software"),to deal in the Software without restriction,including without limitation the rights to use,copy,modify,merge,publish,distribute,sublicense, and/or sell copies of the Software,and to permit persons to whom the Software is furnished to do so,subject to the
      following conditions:
The above copyright notice and this permission notice shall
be included in all copies or substantial portions of the
Software.
THE SOFTWARE IS PROVIDED“AS IS",WITHOUT
WARRANTY OF ANY KIND,EXPRESS OR IMPLIED,
INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY,FITNESS FOR A PARTICULAR
PURPOSE AND NONINFRINGEMENT.IN

 NO EVENT
SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM,DAMAGES OR OTHER
LIABILITY,WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE,ARISING FROM,OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.
</p>
<h3>
  API Kit
</h3>
<p>
  Copyright (c) 2015-2016 Yosuke Ishikawa Permission is
hereby granted,free of charge,to any person obtaining a
copy of this software and associated documentation files
(the“Software"),to deal in the Software without restriction,
including without limitation the rights to use,copy,modify,
merge,publish,distribute,sublicense,and/or sell copies of
the Software,and to permit persons to whom the Software
is furnished to do so,subject to the following conditions:
The above copyright notice and this permission notice shall
be included in all copies or substantial portions of the
Software.THE SOFTWARE IS PROVIDED“AS IS",
WITHOUT WARRANTY OF ANY KIND,EXPRESS OR
IMPLIED,INCLUDING BUT NOT LIMITED TO THE
WARRANTIES OF MERCHANTABILITY,FITNESS FOR A
PARTICULAR PURPOSE AND NONINFRINGEMENT.IN

 NO
EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS
BE LIABLE FOR ANY CLAIM,DAMAGES OR OTHER
LIABILITY,WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE,ARISING FROM,OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.

</p>
<h3>BlocksKit
</h3>
<p>// // LICENSE // BlocksKit //
Copyright (c) 2011-2014 Zachary Waldowski,Alexsander
Akers,and the BlocksKit Contributors
Permission is hereby granted,free of charge,to any person
obtaining a copy of this software and associated
documentation files (the“Software'"),to deal in the Software
without restriction,including without limitation the rights to
use,copy,modify,merge,publish,distribute,sublicense,
and/or sell copies of the Software,and to permit persons to
whom the Software is furnished to do so,subject to the
following conditions:
The above copyright notice and this permission notice shall
be included in all copies or substantial portions of the
Software,
</p>
<h3>CocoaLumberjack</h3>
<p>Software License Agreement (BSD License)
Copyright (c) 2010-2016,Deusty,LLC All rights reserved.
Redistribution and use of this software in source and binary
forms,with or without modification,are permitted provided
that the following conditions are met:
Redistributions of source code must retain the above
copyright notice,this list of conditions and the
following disclaimer.
Neither the name of Deusty nor the names of its
contributors may be used to endorse or promote
products derived from this software without specific
prior written permission of Deusty,LLC.
THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT
HOLDERS AND CONTRIBUTORS“AS IS”AND ANY
EXPRESS OR IMPLIED WARRANTIES,INCLUDING,BUT
NOT LIMITED TO,THE IMPLIED WARRANTIES OF
MERCHANTABILITY AND FITNESS FOR A PARTICULAR
PURPOSE ARE DISCLAIMED.IN

 NO EVENT SHALL THE
COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE
FOR ANY DIRECT,INDIRECT,INCIDENTAL,SPECIAL,
EXEMPLARY,OR CONSEQUENTIAL DAMAGES
(INCLUDING,BUT NOT LIMITED TO,PROCUREMENT OF
SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
DATA,OR PROFITS; OR BUSINESS INTERRUPTION)
HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY,
WHETHER IN CONTRACT,STRICT LIABILITY,OR TORT
(INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN
ANY WAY OUT OF THE USE OF THIS SOFTWARE,EVEN IF
ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
</p>
    </main>
  </div>

</template>


<script>
export default {
  methods:{
    shezhiback() {
      history.back()
  },

  }
}
</script>

<style lang="css" scoped>
.bg{
  background-color:#F6F6F6;
  width: 100%;
  height: 12rem;
  overflow: auto;
}
.bgTop{
  background-color:white;
  width: 100%;
  height:.8rem;
  line-height: .8rem;
  text-align: center;
  font-size: .3rem;
  border-bottom: .01rem solid #C6C7C7;
  margin-bottom: .2rem;
  font-weight:700;
}
.bgTop img{
  float: left;
  width: .4rem;
  height: .4rem;
  margin: .2rem 0 0.2rem;
}
main {
  padding:.2rem;

}
main h3{
  font-weight: bold;
  font-size: .3rem;
  margin-bottom: .3rem;
}
main span{
  color: blue;
}
main p{
  margin-bottom: .3rem;
}

</style>
