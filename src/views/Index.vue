<template>
  <div class="app-container">
    <!-- 头部区域 - 优化为白色背景+图标按钮 -->
    <header class="app-header">
      <div class="logo-container" @click="clearSearch">
        <img src="../assets/logo.svg" alt="AI伴学平台logo" class="logo-icon" />
        <h1 class="logo-text">AI伴学平台</h1>
      </div>
      <div class="header-buttons">
        <!-- 助教按钮：图标+文字垂直布局 -->
        <button
            @click="activeType = 'forTeach'"
            :class="activeType === 'forTeach' ? 'active-btn' : 'header-btn'"
        >
          <svg t="1760591703613" class="btn-icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="49708" width="64" height="64"><path d="M179.863 162.002c71.428 0 132.142 60.714 132.142 132.142s-57.142 132.142-132.142 132.142c-71.428 0-132.142-57.142-132.142-132.142 0-74.999 60.714-132.142 132.142-132.142z m317.855 582.139c-7.143 0-14.286-3.571-21.428-7.143l-164.285-75v299.998H12.007V661.999S8.436 537 165.577 519.143h25c67.857-7.143 110.714 17.857 164.285 50L479.861 637l89.285-142.856c14.286-21.428 39.285-28.571 60.714-14.286 21.428 14.286 28.571 39.285 14.286 60.714L533.432 722.713c-7.143 10.714-21.429 21.428-35.714 21.428zM401.29 576.285h103.571l-17.857 32.143h-25l-60.714-32.143zM633.431 462l107.142-189.284 14.286 10.714-107.142 189.285L633.431 462zM1012 611.999H612.003v-75H937V137.003H287.005v74.999h-74.999V62.003L1012 65.574v546.425z" p-id="49709" fill="#ffffff"></path></svg>          <span class="btn-text">助教</span>
        </button>
        <!-- 助学按钮：图标+文字垂直布局 -->
        <button
          @click="activeType = 'forLearn'"
          :class="activeType === 'forLearn' ? 'active-btn' : 'header-btn'"
      >
          <svg t="1760591057812" class="btn-icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="47079" width="64" height="64"><path d="M874.3 431.6l94.2-40.4c36.5-15.4 53.2-57.6 37.8-94.2-7-16-19.9-29.5-35.9-36.5L541.9 63.3c-9.6-4.5-19.2-6.4-30.1-6.4-9.6 0-19.2 1.9-28.2 5.8L53.8 260.6C18 277.2 1.9 319.5 18.6 355.4c7.7 16 20.5 28.8 36.5 35.9l94.2 40.4v320.9c1.3 25.6 16.7 48.7 39.1 60.2l290.8 146.7 3.8 1.9c9 3.8 18.6 5.8 28.2 5.8 10.9 0 22.4-2.6 32-7.7L834 812.7l3.8-1.9c22.4-12.8 35.9-36.5 35.9-62.1V432.2c0.6 0.1 0.6 0.1 0.6-0.6z m-362.5-310L955 325.9 511.8 516.2 68.6 325.9l443.2-204.3z m0 780.8L214.6 752.5V459.2l269 115.3c9 3.8 18.6 5.8 28.2 5.8s19.2-1.9 28.2-5.8l269-115.3v293.4L511.8 902.4z" p-id="47080" fill="#ffffff"></path><path d="M935.2 673.1c0 3.2 0.6 6.4 1.9 9 3.8 7 10.9 11.5 18.6 11.5 3.2 0 6.4-0.6 9-1.9 21.8-10.9 35.2-32.7 35.2-57.6V454.7l-65.3 32.7v185.8h0.6z" p-id="47081" fill="#ffffff"></path></svg>        <span class="btn-text">助学</span>
      </button>
        <!-- 助评按钮：图标+文字垂直布局 -->
        <button
            @click="activeType = 'forEvaluate'"
            :class="activeType === 'forEvaluate' ? 'active-btn' : 'header-btn'"
        >
          <svg t="1760591786664" class="btn-icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="54520" width="64" height="64"><path d="M751.786667 335.232a43.648 43.648 0 0 1 5.12 86.997333l-5.12 0.298667h-224a43.648 43.648 0 0 1-5.12-86.997333l5.12-0.298667h224zM369.365333 284.032a43.648 43.648 0 0 1 65.322667 57.6l-3.626667 4.096-96 96a43.648 43.648 0 0 1-57.6 3.626667l-4.096-3.626667-32-32a43.648 43.648 0 0 1 57.6-65.322667l4.096 3.626667 1.109334 1.109333 65.194666-65.109333zM751.786667 633.898667a43.648 43.648 0 0 1 5.12 86.997333l-5.12 0.298667h-224a43.648 43.648 0 0 1-5.12-86.997334l5.12-0.298666h224zM369.365333 582.698667a43.648 43.648 0 0 1 65.322667 57.6l-3.626667 4.096-96 96a43.648 43.648 0 0 1-57.6 3.626666l-4.096-3.626666-32-32a43.648 43.648 0 0 1 57.6-65.322667l4.096 3.626667 1.109334 1.109333 65.194666-65.109333z" fill="#ffffff" p-id="54521"></path><path d="M640 41.685333H384C146.56 41.685333 41.685333 146.56 41.685333 384v256c0 237.44 104.874667 342.314667 342.314667 342.314667h256c237.44 0 342.314667-104.874667 342.314667-342.314667V384c0-237.44-104.874667-342.314667-342.314667-342.314667zM384 128.981333h256c189.226667 0 255.018667 65.792 255.018667 255.018667v256c0 189.226667-65.792 255.018667-255.018667 255.018667H384c-189.226667 0-255.018667-65.792-255.018667-255.018667V384c0-189.226667 65.792-255.018667 255.018667-255.018667z" fill="#ffffff" p-id="54522"></path></svg>          <span class="btn-text">助评</span>
        </button>
      </div>
    </header>

    <!-- 搜索区域 -->
    <section class="search-section">
      <div class="search-container">
        <svg t="1760794863634" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="11992" width="32" height="32"><path d="M830.691776 28.50234a264.084578 264.084578 0 0 0 52.467534 113.54914 280.830818 280.830818 0 0 0 115.416526 64.45495 38.371778 38.371778 0 0 1 0 72.285924 282.276536 282.276536 0 0 0-115.476765 64.45495 265.048391 265.048391 0 0 0-52.467533 113.488902 37.167013 37.167013 0 0 1-72.285925 0 264.566484 264.566484 0 0 0-52.527772-113.488902A282.397013 282.397013 0 0 0 590.401315 278.792354a38.371778 38.371778 0 0 1 0-72.285924 281.252485 281.252485 0 0 0 115.416526-64.45495 265.048391 265.048391 0 0 0 52.467534-113.54914 37.167013 37.167013 0 0 1 72.285924 0zM760.273238 290.840009a259.024564 259.024564 0 0 0-63.310423-48.190617 257.699322 257.699322 0 0 0 63.250184-48.190616 234.929255 234.929255 0 0 0 34.215338-49.274906 237.519501 237.519501 0 0 0 34.275576 49.274906 259.024564 259.024564 0 0 0 63.250184 48.190616 256.313841 256.313841 0 0 0-63.250184 48.190617 237.519501 237.519501 0 0 0-34.275576 49.274905 234.929255 234.929255 0 0 0-34.215338-49.274905zM378.001172 219.819088a37.468204 37.468204 0 0 1 36.142963 28.613178 499.977646 499.977646 0 0 0 99.875052 214.93015 526.000579 526.000579 0 0 0 216.436107 122.404165 38.432017 38.432017 0 0 1 0 72.285925 525.27772 525.27772 0 0 0-216.436107 122.404166 499.977646 499.977646 0 0 0-99.995529 214.930149 37.167013 37.167013 0 0 1-72.285924 0 500.88122 500.88122 0 0 0-99.99553-214.930149 527.446297 527.446297 0 0 0-216.436106-122.404166 38.432017 38.432017 0 0 1 0-72.285925 526.723438 526.723438 0 0 0 216.436106-122.404165 500.399314 500.399314 0 0 0 99.99553-215.050626 37.528443 37.528443 0 0 1 36.263438-28.552941z" p-id="11993" fill="#ffffff"></path></svg>
        <input
            type="text"
            v-model="searchQuery"
            placeholder="搜索AI助手、介绍或标签..."
            class="search-input"
            @keyup.enter="handleSearch"
        />
        <button @click="handleSearch" class="search-btn">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="11" cy="11" r="8"></circle>
            <path d="m21 21-4.3-4.3"></path>
          </svg>
        </button>
      </div>
    </section>

    <!-- 主要内容区域 -->
    <main class="main-content">
      <div v-if="filteredAgents.length > 0" class="agents-grid">
        <div
            v-for="agent in filteredAgents"
            :key="agent.id"
            class="agent-card"

            @click="goToAgentLink(agent.link)"
        >
          <img
              :src="agent.coverUrl"
              :alt="agent.name"
              class="agent-cover"
          />
          <div class="agent-info">
            <!-- 移除高亮组件，直接显示文本 -->
            <h3 class="agent-name">{{ agent.name }}</h3>
            <p class="agent-intro">{{ agent.intro }}</p>
            <div class="agent-tags">
              <div class="tag-item" v-for="tag in agent.tag">
                {{ tag }}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div v-else class="no-results">
        <p>没有找到符合条件的AI助手</p>
      </div>
    </main>

    <!-- 页脚区域 -->
    <footer class="app-footer">
      <span>© 2025 AI 伴学平台</span>
      <span>徐州市中山外国语实验学校</span>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch } from 'vue';
import { agents } from '../data/agentData';
// 定义类型
export type UseType = 'forTeach' | 'forLearn' | 'forEvaluate';

export interface Agent {
  id: string;
  name: string;
  intro: string;
  coverUrl: string;
  type: UseType;
  link: string;
  tag: string;
}

// 状态管理（保持不变）
const activeType = ref<UseType>('forTeach');
const searchQuery = ref('');
const currentSearch = ref('');

// 处理搜索（保持不变，仅删除高亮相关逻辑）
const handleSearch = () => {
  currentSearch.value = searchQuery.value.trim();
};

// 清空搜索状态
const clearSearch = () => {
  currentSearch.value = '';
  searchQuery.value = '';
  activeType.value = 'forTeach';
}

// 跳转到指定助手链接
const goToAgentLink = (link: string) => {
  // 验证link有效性，避免空链接跳转
  if (link && link.trim()) {
    // 方式1：当前窗口跳转（常用）
    // window.location.href = link;
    // 方式2：新窗口跳转（如需新窗口打开，替换上面代码为下面这行）
    window.open(link, '_blank');
  }
};

// 监听分类变化，清空搜索（保持不变）
watch(activeType, () => {
  currentSearch.value = '';
  searchQuery.value = '';
});

watch(searchQuery, () => {
  handleSearch();
});

// 筛选 agents（保持不变，搜索逻辑正常保留）
const filteredAgents = computed(() => {
  return agents.filter(agent => {
    const typeMatch = agent.type === activeType.value;
    if (!currentSearch.value) return typeMatch;

    const searchLower = currentSearch.value.toLowerCase();
    const nameMatch = agent.name.toLowerCase().includes(searchLower);
    const introMatch = agent.intro.toLowerCase().includes(searchLower);
    const tagMatch = agent.tag.some(tag => tag.toLowerCase().includes(searchLower));
    return typeMatch && (nameMatch || introMatch || tagMatch);
  });
});
</script>

<style scoped>
.app-container {
  height: 100vh;
  display: flex;
  flex-direction: column;
  font-family: 'Arial Rounded MT Bold', 'Helvetica Neue', sans-serif;
  color: #333;
}

/* 头部样式 - 核心修改区域 */
.app-header {
  background-color: white; /* 背景改为白色 */
  padding: 0 20px;
  height: 90px; /* 增高以适配图标+文字布局 */
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08); /* 加深阴影增强层次感 */
}

.logo-container {
  display: flex;
  cursor: pointer;
  align-items: center;
  gap: 12px;
}

.logo-icon {
  height: 45px; /* 增大logo尺寸 */
  width: 45px;
  object-fit: contain;
  /* 移除invert滤镜，确保logo原色显示 */
}

.logo-text {
  font-size: 1.6rem;
  margin: 0;
  font-weight: 700;
  color: rgba(12, 67, 255, 0.6); /* 标题改为主题色 */
}

/* 按钮容器：增大间距 */
.header-buttons {
  display: flex;
  gap: 25px;
}

/* 未选中按钮样式 */
.header-btn {
  background-color: transparent;
  border: none;
  padding: 10px 15px;
  border-radius: 8px; /* 圆角优化 */
  cursor: pointer;
  display: flex; /* 图标+文字垂直布局 */
  flex-direction: column;
  align-items: center;
  gap: 6px; /* 图标与文字间距 */
  transition: all 0.3s ease;
  color: #666; /* 未选中文字色 */
}

/* 选中按钮样式：主题色背景 */
.active-btn {
  background-color: rgba(12, 67, 255, 0.6); /* 选中背景为主题色 */
  border: none;
  padding: 10px 15px;
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  transition: all 0.3s ease;
  color: white; /* 选中文字色为白色 */
}
.header-btn .btn-icon:deep(path) {
  fill: black;
}

/* 按钮图标样式 */
.btn-icon {
  width: 24px;
  height: 24px;
  object-fit: contain;
}


/* 按钮文字样式 */
.btn-text {
  font-size: 0.9rem;
  font-weight: 500;
}

/* 未选中按钮hover效果 */
.header-btn:hover {
  background-color: #eef1ff; /* 浅主题色背景 */
  color: rgba(12, 67, 255, 0.6); /* hover文字色改为主题色 */
}

/* 搜索区域样式（保持不变） */
.search-section {
  padding: 30px 20px;
  background: rgba(12, 67, 255, 0.6);
}

.search-container {
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  position: relative;
  .icon {
    margin-right: 10px;
  }
}

.search-input {
  flex: 1;
  padding: 14px 20px;
  border: none;
  border-radius: 30px 0 0 30px;
  font-size: 1rem;
  outline: none;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.search-btn {
  background-color: white;
  color: rgba(12, 67, 255, 0.6);
  border: none;
  border-radius: 0 30px 30px 0;
  padding: 0 20px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.search-btn:hover {
  background-color: #f0f0f0;
}

/* 主要内容区域样式（删除.highlighted-text相关样式） */
.main-content {
  overflow: auto;
  flex: 1;
  scrollbar-width: thin; /* Firefox：设置滚动条宽度（thin/auto/none） */
  scrollbar-color: rgba(80, 80, 80, 0.5) transparent; /* Firefox：滚动条滑块颜色 + 轨道颜色 */
  padding: 40px 20px;
  background-color: #f9f9f9;
}

.agents-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  max-width: 1200px;
  margin: 0 auto;
}

.agent-card {
  background-color: white;
  border-radius: 12px;
  overflow: hidden;
  display: flex;
  align-items: center;
  cursor: pointer;
  gap: 20px;
  padding: 20px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  animation: fadeIn 0.5s ease forwards;
  opacity: 0;
}

.agent-card:hover {
  transform: translateY(-5px) scale(1.02);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}

.agent-cover {
  width: 80px;
  height: 80px;
  object-fit: cover;
  border-radius: 8px;
  flex-shrink: 0;
}

.agent-info {
  flex: 1;
}

.agent-name {
  margin: 0 0 10px 0;
  color: rgba(12, 67, 255, 0.75);
  font-size: 1.2rem;
}

.agent-intro {
  margin: 0 0 10px 0;
  color: #666;
  font-size: 0.9rem;
  line-height: 1.5;
}

.agent-tags {
  display: flex;
  flex-direction: row;
  gap: 10px;
}

.tag-item {
  font-size: 0.7rem;
  color: rgba(12, 67, 255, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  padding: 3px 5px;
  background-color: rgba(112, 175, 225, 0.15);
  width: 40px;
}

.no-results {
  text-align: center;
  padding: 50px 0;
  color: #666;
  font-size: 1.1rem;
}

/* 页脚样式（保持不变） */
.app-footer {
  background: rgba(12, 67, 255, 0.6);
  color: white;
  text-align: center;
  padding: 20px;
  gap: 10px;
  font-size: 0.9rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

/* 动画（保持不变） */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* 响应式布局 - 适配按钮样式 */
@media (max-width: 1024px) {
  .agents-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  .header-buttons {
    gap: 15px;
  }
}

@media (max-width: 768px) {
  .agents-grid {
    grid-template-columns: 1fr;
  }
  .logo-text {
    font-size: 1.3rem;
  }
  .header-btn, .active-btn {
    padding: 8px 12px;
    gap: 4px;
  }
  .btn-icon {
    width: 20px;
    height: 20px;
  }
  .btn-text {
    font-size: 0.8rem;
  }
  .search-section {
    padding: 20px 15px;
  }
  .main-content {
    padding: 20px 15px;
  }
}

@media (max-width: 480px) {
  .app-header {
    height: auto;
    padding: 15px;
    flex-direction: column;
    gap: 15px;
  }
  .logo-container {
    justify-content: center;
  }
  .header-buttons {
    width: 100%;
    justify-content: space-around;
    gap: 5px;
  }
  .agent-card {
    flex-direction: column;
    text-align: center;
    padding: 15px;
  }
  .agent-cover {
    width: 100px;
    height: 100px;
  }
  .search-input {
    padding: 12px 15px;
    font-size: 0.9rem;
  }
}
</style>