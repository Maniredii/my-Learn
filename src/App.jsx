import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import java from 'react-syntax-highlighter/dist/esm/languages/prism/java';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { Search, BookOpen, Code, Terminal, Menu, X, ChevronRight, Zap } from 'lucide-react';
import { topics } from './data/topics';

// Register Java language
SyntaxHighlighter.registerLanguage('java', java);

function App() {
  const [selectedTopicId, setSelectedTopicId] = useState(topics[0].id);
  const [searchQuery, setSearchQuery] = useState('');
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  const selectedTopic = topics.find(t => t.id === selectedTopicId);

  // Group topics by category
  const filteredTopics = useMemo(() => {
    return topics.filter(t =>
      t.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      t.category.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery]);

  const categories = useMemo(() => {
    const cats = {};
    filteredTopics.forEach(t => {
      if (!cats[t.category]) cats[t.category] = [];
      cats[t.category].push(t);
    });
    return cats;
  }, [filteredTopics]);

  return (
    <div className="flex h-screen w-full overflow-hidden bg-[var(--bg-color)] text-[var(--text-primary)]">
      {/* Mobile Sidebar Overlay */}
      <AnimatePresence>
        {!isSidebarOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSidebarOpen(true)}
            className="fixed inset-0 bg-black/50 z-20 md:hidden"
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <motion.aside
        className={`fixed md:relative z-30 h-full w-72 glass-panel flex flex-col border-r border-[var(--glass-border)] transition-all duration-300 ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0 md:w-72'}`}
      >
        <div className="p-6 border-b border-[var(--glass-border)] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-gradient-to-br from-[var(--accent-primary)] to-[var(--accent-secondary)] rounded-lg shadow-lg shadow-cyan-500/20">
              <Zap size={24} color="white" fill="white" />
            </div>
            <h1 className="text-xl font-bold tracking-tight">Java<span className="text-gradient">Recall</span></h1>
          </div>
          <button onClick={() => setSidebarOpen(false)} className="md:hidden p-1 hover:bg-white/10 rounded">
            <X size={20} />
          </button>
        </div>

        <div className="p-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--text-secondary)]" size={18} />
            <input
              type="text"
              placeholder="Search concepts..."
              className="input-search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-4 space-y-6">
          {Object.entries(categories).map(([category, items]) => (
            <div key={category}>
              <h3 className="text-xs font-semibold text-[var(--text-secondary)] uppercase tracking-wider mb-3 px-2 flex items-center gap-2">
                {category === 'Basics' && <BookOpen size={14} />}
                {category === 'OOP' && <Code size={14} />}
                {category === 'Collections' && <Terminal size={14} />}
                {category}
              </h3>
              <div className="space-y-1">
                {items.map(topic => (
                  <div
                    key={topic.id}
                    onClick={() => { setSelectedTopicId(topic.id); setSidebarOpen(false); }}
                    className={`sidebar-item ${selectedTopicId === topic.id ? 'active' : ''}`}
                  >
                    <span className="truncate">{topic.title}</span>
                    {selectedTopicId === topic.id && (
                      <motion.div layoutId="active-indicator" className="ml-auto">
                        <ChevronRight size={16} />
                      </motion.div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
          {filteredTopics.length === 0 && (
            <div className="text-center text-[var(--text-secondary)] py-8">
              No topics found
            </div>
          )}
        </div>
      </motion.aside>

      {/* Main Content */}
      <main className="flex-1 h-full overflow-y-auto relative scroll-smooth">
        {/* Header (Mobile Toggle) */}
        {!isSidebarOpen && (
          <div className="fixed top-4 left-4 z-10 md:hidden">
            <button onClick={() => setSidebarOpen(true)} className="p-3 bg-[var(--card-bg)] rounded-full shadow-lg border border-[var(--glass-border)]">
              <Menu size={24} />
            </button>
          </div>
        )}

        <div className="max-w-4xl mx-auto p-6 md:p-12 pb-32">
          <motion.div
            key={selectedTopic?.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <div className="mb-2">
              <span className="px-3 py-1 rounded-full text-xs font-medium bg-blue-500/10 text-blue-400 border border-blue-500/20">
                {selectedTopic?.category}
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white leading-tight">
              {selectedTopic?.title}
            </h1>

            <p className="text-lg text-[var(--text-secondary)] mb-10 leading-relaxed max-w-2xl">
              {selectedTopic?.description}
            </p>

            <div className="glass-panel rounded-2xl overflow-hidden shadow-2xl shadow-black/50 border border-[var(--glass-border)]">
              <div className="bg-black/30 px-4 py-2 border-b border-[var(--glass-border)] flex items-center gap-2">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/50" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                  <div className="w-3 h-3 rounded-full bg-green-500/50" />
                </div>
                <span className="text-xs text-[var(--text-secondary)] ml-2 font-mono">Example.java</span>
              </div>
              <SyntaxHighlighter
                language="java"
                style={vscDarkPlus}
                customStyle={{ margin: 0, padding: '1.5rem', background: 'transparent', fontSize: '0.95rem' }}
                showLineNumbers={true}
                lineNumberStyle={{ minWidth: "2em", paddingRight: "1em", color: "#64748b" }}
              >
                {selectedTopic?.code || ''}
              </SyntaxHighlighter>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
}

export default App;
